import React from "react";
import { Nav, Jumbotron, Dropdown, Container, Row, Col, Card } from "react-bootstrap";
import { GiModernCity } from "react-icons/gi";
import { FaRegChartBar, FaRegKeyboard, FaInfoCircle } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineSearch, AiOutlineCloudDownload, AiOutlineUser } from "react-icons/ai";
import { IoIosConstruct, IoIosSpeedometer } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import src from "./assets/toronto.jpg";

const CustomCard = ({ title, ComponentIcon }) => {
    return (
        <Card className="custom-card" style={{ width: "18rem" }}>
            <Link to="/graphics">
                <Card.Body className="custom-card-body">
                    <div className="card-icon-wrapper">
                        <ComponentIcon color="darkslategrey" size="4rem" />{" "}
                    </div>
                    <Card.Title className="custom-card-title">{title}</Card.Title>
                </Card.Body>
            </Link>
        </Card>
    );
};
const Splash = () => {
    return (
        <div className="container-splash">
            <Jumbotron className="jumbotron-nav">
                <Nav className="container-nav">
                    <div className="container-left-side-items">
                        <Nav.Item>
                            <Nav.Link>
                                <GiModernCity size="3rem" color="crimson" />{" "}
                                <span className="splash-span-name">Municipal </span>
                                <span className="splash-span-connect">Connect </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">
                                <Dropdown className="dropdown custom-dropdown">
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        South Glengarry Township
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>North Glengarry Township</Dropdown.Item>
                                        <Dropdown.Item>Hawkesbury Town</Dropdown.Item>
                                        <Dropdown.Item>The nation Municipality</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className="container-right-side-items">
                        <Nav.Item className="custom-item">
                            <FaRegChartBar color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <AiOutlineSearch color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <IoIosConstruct color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <GrDocumentText color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <AiOutlineCloudDownload color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <AiOutlineUser color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <IoIosSpeedometer color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <FaRegKeyboard color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <FaInfoCircle color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                        <Nav.Item className="custom-item">
                            <BsFillQuestionCircleFill color="darkslategrey" size="1.5rem" />
                        </Nav.Item>
                    </div>
                </Nav>
            </Jumbotron>

            <div className="container-cards">
                <img className="background-card" alt="background" src={src} />
                <Container className="custom-container-cards">
                    <Row className="custom-row-cards">
                        <Col className="custom-col-cards">
                            <CustomCard title="Dashboard Analytics" ComponentIcon={FaRegChartBar} />
                        </Col>
                        <Col className="custom-col-cards">
                            <CustomCard title="Property Monitoring" ComponentIcon={AiOutlineSearch} />
                        </Col>
                        <Col className="custom-col-cards">
                            <CustomCard title="Property Search" ComponentIcon={IoIosConstruct} />
                        </Col>
                        <Col className="custom-col-cards">
                            <CustomCard title="RfR Dashboard" ComponentIcon={GrDocumentText} />
                        </Col>
                    </Row>
                    <Row className="custom-row-cards">
                        <Col className="custom-col-cards">
                            <CustomCard title="Dashboard Analytics" ComponentIcon={AiOutlineCloudDownload} />
                        </Col>
                        <Col className="custom-col-cards">
                            <CustomCard title="Property Monitoring" ComponentIcon={AiOutlineUser} />
                        </Col>
                        <Col className="custom-col-cards">
                            <CustomCard title="Dashboard Analytics" ComponentIcon={IoIosSpeedometer} />
                        </Col>
                        <Col className="custom-col-cards">
                            <CustomCard title="Property Monitoring" ComponentIcon={FaInfoCircle} />
                        </Col>
                    </Row>
                    <Row className="custom-row-cards">
                        <Col className="custom-col-cards">
                            <CustomCard title="Property Search" ComponentIcon={BsFillQuestionCircleFill} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Splash;
