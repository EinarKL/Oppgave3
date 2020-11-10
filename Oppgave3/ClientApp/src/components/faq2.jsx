import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Spørsmål from './spørsmål';

class FAQ extends Component {
    constructor() {
        super();
        this.state = { faqs: [], loading: true };
    }

    componentDidMount() {
        this.populateFAQs();
    }

    renderFAQ1(faq) {
        return (
            <Accordion>
                {faq.map(item =>
                    <Spørsmål item={item} key={item.id} />
                )}
            </Accordion>
        );
    }

    render() {
        let innhold = this.renderFAQ1(this.state.faqs);

        return (
            { innhold }
        );
    }

    async populateFAQs() {
        const response = await fetch('https://localhost:44335/FAQ/HentFAQer');
        const data = await response.json();
        let kat = this.props.katid;
        let faqs = [];
        for (var d in data) {
            if (d.Kategoriid === kat) {
                faqs.push(d);
            }
        }
        this.setState({ faqs: faqs, loading: false });
    }
}
export default FAQ;