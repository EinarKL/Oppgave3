import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Footer from './footer';
import Spørsmål from './spørsmål';

var faqList = [];
var kat1List = [];
var kat2List = [];
var kat3List = [];
var kat4List = [];

class FAQ extends Component {
    constructor() {
        super();
        this.state = { faqs: [], loading: true, faq1: [], faq2: [], faq3: [], faq4: [] };
    }

    toggleClick = (kat) => {
        if (kat === 1) {
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
        else if (kat === 2) {
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
        else if (kat === 3) {
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
        else if (kat === 4) {
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
        this.populateFAQs();
    }
    renderFAQ1(faq) {
        return (
            <Card key="faq1">
                <Accordion.Toggle onClick={() => this.toggleClick(1)} className="kategori" as={Card.Header} eventKey="kat1" style={{ cursor: "pointer" }}>
                    <div><span>Før bestilling</span></div>
                    <div><img id="pluss1" src="./bilder/pluss.png" alt="Pluss" /></div>
                    <div><img src="./bilder/minus.png" alt="Minus" /></div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="kat1">
                    <Accordion>
                        {faq.map(item =>
                            <Spørsmål item={item} key={item.id} />
                        )}
                    </Accordion>
                </Accordion.Collapse>
            </Card>
        );
    }

    renderFAQ2(faq) {
        return (
            <Card key="faq2">
                <Accordion.Toggle onClick={() => this.toggleClick(2)} className="kategori" as={Card.Header} eventKey="kat2" style={{ cursor: "pointer" }}>
                    <div><span>Under bestilling</span></div>
                    <div><img id="pluss2" src="./bilder/pluss.png" alt="Pluss" /></div>
                    <div><img src="./bilder/minus.png" alt="Minus" /></div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="kat2">
                    <Accordion>
                        {faq.map(item =>
                            <Spørsmål item={item} key={item.id} />
                        )}
                    </Accordion>
                </Accordion.Collapse>
            </Card>
        );
    }

    renderFAQ3(faq) {
        return (
            <Card key="faq3">
                <Accordion.Toggle onClick={() => this.toggleClick(3)} className="kategori" as={Card.Header} eventKey="kat3" style={{ cursor: "pointer" }}>
                    <div><span>Etter bestilling</span></div>
                    <div><img id="pluss3" src="./bilder/pluss.png" alt="Pluss" /></div>
                    <div><img src="./bilder/minus.png" alt="Minus" /></div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="kat3">
                    <Accordion>
                        {faq.map(item =>
                            <Spørsmål item={item} key={item.id} />
                        )}
                    </Accordion>
                </Accordion.Collapse>
            </Card>
        );
    }

    renderFAQ4(faq) {
        return (
            <Card key="faq4">
                <Accordion.Toggle onClick={() => this.toggleClick(4)} className="kategori" as={Card.Header} eventKey="kat4" style={{ cursor: "pointer" }}>
                    <div><span>Generelle spørsmål</span></div>
                    <div><img id="pluss4" src="./bilder/pluss.png" alt="Pluss" /></div>
                    <div><img src="./bilder/minus.png" alt="Minus" /></div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="kat4">
                    <Accordion>
                        {faq.map(item =>
                            <Spørsmål item={item} key={item.id} />
                        )}
                    </Accordion>
                </Accordion.Collapse>
            </Card>
        );
    }

    render() {
        let innhold1 = this.state.loading
            ? <p><em>Laster inn...</em></p>
            : this.renderFAQ1(this.state.faq1);
        let innhold2 = this.state.loading
            ? <p><em>Laster inn...</em></p>
            : this.renderFAQ2(this.state.faq2);
        let innhold3 = this.state.loading
            ? <p><em>Laster inn...</em></p>
            : this.renderFAQ3(this.state.faq3);
        let innhold4 = this.state.loading
            ? <p><em>Laster inn...</em></p>
            : this.renderFAQ4(this.state.faq4);

        return (
            <div id="faqDiv">
                <Accordion>
                    {innhold1}
                    {innhold2}
                    {innhold3}
                    {innhold4}
                </Accordion>
                <Footer />
            </div>
        );
    }

    async populateFAQs() {
        const response = await fetch('https://localhost:44335/FAQ/HentFAQer');
        const data = await response.json();
        this.setState({ faq: data, loading: false });
        faqList = data;
        kat1List[0] = faqList[0];
        kat2List[0] = faqList[2];
        kat2List[1] = faqList[3];
        kat2List[2] = faqList[5];
        kat3List[0] = faqList[1];
        kat3List[1] = faqList[4];
        kat4List[0] = faqList[6];
        kat4List[1] = faqList[7];
        this.setState({ faq1: kat1List, faq2: kat2List, faq3: kat3List, faq4: kat4List });
    }
}
export default FAQ;