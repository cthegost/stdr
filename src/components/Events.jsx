import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export class Events extends Component {
    render() {
        return (
            <div className="events">
                <div className="events-name">
                    <h2>STDR Events</h2>
                    <p>What’s happening on campus</p>
                </div>
                <Container>
                <Row>
                    <Col sm={ 6 }>
                        <div className="news"></div>
                    </Col>
                    <Col sm={ 3 }>
                    <div className="news"></div>
                    </Col>
                    <Col sm={ 3 }>
                    <div className="news"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={ 3 }>
                    <div className="news"></div>
                    </Col>
                    <Col sm={ 3 }>
                    <div className="news"></div>
                    </Col>
                    <Col sm={ 6 }>
                    <div className="news"></div>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

