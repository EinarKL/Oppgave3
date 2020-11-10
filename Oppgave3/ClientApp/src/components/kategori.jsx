import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Footer from './footer';
import FAQ from './faq2';

var katArr = [];

class Kategori extends Component {
    constructor() {
        super();
        this.state = { kats: [], loading: true };
    }

    toggleClick = (id) => {
        if (id === 1) {
            var img = document.getElementById("pluss1");
            if (img.style.display === "none") {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
            document.getElementById("pluss2").style.display = "block";
            document.getElementById("pluss3").style.display = "block";
            document.getElementById("pluss4").style.display = "block";
        }
        else if (id === 2) {
            var img = document.getElementById("pluss2");
            if (img.style.display === "none") {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
            document.getElementById("pluss1").style.display = "block";
            document.getElementById("pluss3").style.display = "block";
            document.getElementById("pluss4").style.display = "block";
        }
        else if (id === 3) {
            var img = document.getElementById("pluss3");
            if (img.style.display === "none") {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
            document.getElementById("pluss1").style.display = "block";
            document.getElementById("pluss2").style.display = "block";
            document.getElementById("pluss4").style.display = "block";
        }
        else if (id === 4) {
            var img = document.getElementById("pluss4");
            if (img.style.display === "none") {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
            document.getElementById("pluss1").style.display = "block";
            document.getElementById("pluss2").style.display = "block";
            document.getElementById("pluss3").style.display = "block";
        }
    }

    componentDidMount() {
        this.populateKategorier();
    }
    renderKategorier(kat) {
        return (
            <React.Fragment>
                {kat.map(item =>
                    <Card key={item.id}>
                        <Accordion.Toggle onClick={() => this.toggleClick(item.id)} className="kategori" as={Card.Header} eventKey={"kat" + item.id} style={{ cursor: "pointer" }}>
                            <div><span>{item.tittel}</span></div>
                            <div><img id={"pluss" + item.id} src="./bilder/pluss.png" alt="Pluss" /></div>
                            <div><img src="./bilder/minus.png" alt="Minus" /></div>
                        </Accordion.Toggle>
                    </Card>
                )}
            </React.Fragment>
        );
    }

    render() {
        let innhold = this.state.loading
            ? <p><em>Laster inn...</em></p>
            : this.renderKategorier(this.state.kats);

        return (
            <div id="katDiv">
                <Accordion>
                    {innhold}
                </Accordion>
                <Footer />
            </div>
        );
    }

    async populateKategorier() {
        const response = await fetch('https://localhost:44335/FAQ/HentKategorier');
        const data = await response.json();
        this.setState({ kats: data, loading: false });
    }
}
export default Kategori;