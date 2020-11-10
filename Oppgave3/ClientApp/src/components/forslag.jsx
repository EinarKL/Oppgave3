import React, { Component } from 'react';
import axios from 'axios';

class Forslag extends Component {
    state = {
        navn: '',
        epost: '',
        spørsmål: '',
        feilNavn: '',
        feilEpost: '',
        feilSpørsmål: ''
    };

    endreNavn(event) {
        this.setState(
            { navn: event.target.value }
        );
    }

    endreEpost(event) {
        this.setState(
            { epost: event.target.value }
        );
    }

    endreSpørsmål(event) {
        this.setState(
            { spørsmål: event.target.value }
        );
    }

    validerNavn = () => {
        let feilNavn = '';
        let ok = false;
        if (this.state.navn === '') {
            feilNavn = 'Må skrive inn et navn!';
        }
        else if (!(/^[a-zA-Z]+$/).test(this.state.navn)) {
            feilNavn = 'Skriv bare inn bokstaver!';
        }
        else if (this.state.navn.length < 2) {
            feilNavn = 'Skriv minst 2 bokstaver!';
        }
        else {
            feilNavn = '';
            ok = true;
        }
        this.setState({ feilNavn: feilNavn });
        return ok;
    }

    validerEpost = () => {
        let feilEpost = '';
        let ok = false;
        if (this.state.epost === '') {
            feilEpost = 'Må skrive inn en epostadresse!';
        }
        else if (!(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(this.state.epost)) {
            feilEpost = 'Skriv inn en gyldig epostadresse!';
        }
        else {
            feilEpost = '';
            ok = true;
        }
        this.setState({ feilEpost: feilEpost });
        return ok;
    }

    validerSpørsmål = () => {
        let feilSpørsmål = '';
        let ok = false;
        if (this.state.spørsmål === '') {
            feilSpørsmål = 'Må skrive inn et spørsmål!';
        }
        else if (this.state.spørsmål.length < 10) {
            feilSpørsmål = 'Skriv inn minst 10 tegn!';
        }
        else {
            feilSpørsmål = '';
            ok = true;
        }
        this.setState({ feilSpørsmål: feilSpørsmål });
        return ok;
    }

    valider = () => {
        let navnOK = this.validerNavn();
        let epostOK = this.validerEpost();
        let spørsmålOK = this.validerSpørsmål();

        if (!navnOK || !epostOK || !spørsmålOK) {
            return false;
        }

        return true;
    }

    sendInn = event => {
        event.preventDefault();
        const gyldig = this.valider();
        if (gyldig) {
            const forslag = {
                navn: this.state.navn,
                epost: this.state.epost,
                spørsmål: this.state.spørsmål
            }

            this.setState({ navn: '', epost: '', spørsmål: '' });

            axios.post('https://localhost:44335/FAQ/LagreForslag', forslag);

            setTimeout(() => this.props.oppdaterListe(), 1000);
        }
    };

    render() {
        return (
            <form id="forslagDiv" onSubmit={this.sendInn}>
                <h3 style={{ color: "#F7F7F7" }}>Send inn spørsmål:</h3>
                <div>
                    <textarea id="navn" maxLength="30" placeholder="Fornavn..." value={this.state.navn} onChange={event => this.endreNavn(event)} onKeyUp={() => this.validerNavn()} />
                    <span id="feilNavn" className="feil">{this.state.feilNavn}</span>
                </div>
                <div>
                    <textarea id="epost" maxLength="30" placeholder="Epostadresse..." value={this.state.epost} onChange={event => this.endreEpost(event)} onKeyUp={() => this.validerEpost()} />
                    <span id="feilEpost" className="feil">{this.state.feilEpost}</span>
                </div>
                <div>
                    <textarea id="spørsmål" maxLength="200" placeholder="Spørsmål..." value={this.state.spørsmål} onChange={event => this.endreSpørsmål(event)} onKeyUp={() => this.validerSpørsmål()} />
                    <span id="feilSpørsmål" className="feil">{this.state.feilSpørsmål}</span>
                </div>
                <button type="submit" id="knappSendInn" className="btn btn-secondary" >Send inn</button>
            </form>
        );
    }
}

export default Forslag;