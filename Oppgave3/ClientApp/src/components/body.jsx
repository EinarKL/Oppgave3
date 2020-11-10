import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Forslagside from './forslagside';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Kategori from './kategori';

class Body extends Component {

    render() {
        return (
            <div>
                <Tab.Container id="tabs" defaultActiveKey="faq">
                    <Row>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link eventKey="faq">FAQ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="forslag">Forslag</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                    <Row>
                        <Tab.Content>
                            <Tab.Pane eventKey="faq">
                                <Kategori />
                            </Tab.Pane>
                            <Tab.Pane eventKey="forslag">
                                <Forslagside />
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default Body;