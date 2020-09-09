import React from 'react';
import { Card, Container, CardColumns, Row, Col } from 'react-bootstrap';
import './Dashboard.css';

const Content = (props) => {
    return (
        <div>
            <Container fluid>
                <Row>
                    {props.programs.length>0 ? props.programs.map((program, index) => {
                        return (
                            <Col xs={12} md={6} lg={3}>
                                <Card key={`${index}${program.mission_name}`} style={{alignItems : "center", marginBottom: "20px"}}>
                                    {/* <Card.Img variant="top" src={program.links.mission_patch}/> */}
                                    <Card.Img className="cardimg" variant="top" src='images/falcon.jpg' style={{ width: "180px", backgroundColor: "lightgrey" }} />

                                    <Card.Body>
                                        <div className="crdbdy">
                                        <span className="crdbodytitle">{`${program.mission_name} #${program.flight_number}`}</span>
                                        <p><b>Mission Ids :</b><span className="crdval">{program.mission_id}</span></p>
                                        <p><b>Launch Year :</b><span className="crdval">{program.launch_year}</span></p>
                                        <p><b>Successful Launch :</b><span className="crdval">{program.launch_success.toString()}</span></p>
                                        <p><b>Successful Landing :</b><span className="crdval">{program.rocket.first_stage.cores[0].land_success !== null && program.rocket.first_stage.cores[0].land_success.toString()}</span></p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }): <div style={{marginLeft: "20px"}}>Data Not Available</div>
                }
                </Row>
            </Container>
        </div>
    )
}

export default Content;