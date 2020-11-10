import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ForslagListe extends Component {
    constructor() {
        super();
        this.state = { forslag: [], loading: true };
    }

    componentDidMount() {
        this.populateForslag();
    }
    renderForslag(forslag) {
        return (
            <div>
                <h3 style={{ color: "#F7F7F7" }}>Innsendte spørsmål:</h3>
                <Card>
                    {forslag.map(item =>
                        <Card.Body key={ item.id }>
                            <div><span style={{ fontWeight: "bold" }}>{item.navn}</span></div>
                            <div><span>{item.spørsmål}</span></div>
                        </Card.Body>
                    )}

                </Card>
            </div>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Laster inn...</em></p>
            : this.renderForslag(this.state.forslag);

        return (
            <div>
                {contents}
            </div>
        );
    }

    async populateForslag() {
        const response = await fetch('https://localhost:44335/FAQ/HentForslag');
        const data = await response.json();
        this.setState({ forslag: data, loading: false });
    }

    oppdater() {
        this.populateForslag();
    }
}
export default ForslagListe;