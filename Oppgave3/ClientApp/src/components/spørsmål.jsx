import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Rating from './rating';

class Spørsmål extends Component {
    render() {
        return (
            <Card>
                <Accordion.Toggle className="accordionToggle" as={Card.Header} eventKey={this.props.item.id} style={{ cursor: "pointer" }}>
                    <span>{this.props.item.spørsmål}</span>
                </Accordion.Toggle>
                <Rating item={this.props.item} />
                <Accordion.Collapse eventKey={this.props.item.id}>
                    <Card.Body>
                        <span>{this.props.item.svar}</span>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default Spørsmål;