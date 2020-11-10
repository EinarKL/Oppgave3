import React, { Component } from 'react';
import Forslag from './forslag';
import ForslagListe from './forslagListe';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Forslagside extends Component {
    constructor(props) {
        super(props);
        this.liste = React.createRef();
    }

    oppdaterListe = () => {
        this.refs.liste.oppdater();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Forslag oppdaterListe={this.oppdaterListe} />
                    </Col>
                    <Col>
                        <ForslagListe ref="liste" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Forslagside;