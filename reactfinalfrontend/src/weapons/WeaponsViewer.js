import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetWeaponsById } from 'public/app/src/API/WeaponsApi';
import { Card, Col, Container, ListGrop, Row, Spinner } from 'react-bootstrap';
import { sentenceCase } from 'change-case';
import WeaponsViewer from "../Components/WeaponsViewer";
import { Container } from "react-bootstrap";

const WeaponsViewer = () => {
    const { id } = useParams(); // Get class ID from URL params
    const [weapons, setWeapons] = useState(null);
     return (
        <Container>
            <h2 className="text-center mb-4">Weapons Details</h2>
            <WeaponsViewer />
        </Container>
    );
};

    //Fetch class data by ID
    useEffect(() => {
        GetWeaponsById(id).then((res) => {
            setWeapons(res.data.result);
        });
    }, [id]);

    return (
        <Container className="my-5">
            {weapons ? (
                <Row>
                    {/* Left Column - Classes Details */}
                        <Col md={6} className='mb-4'>
                            <Card className='shadow-sm'>
                                <Card.Body>
                                    <Card.Title className='display-5 mb-3'>
                                        {weapons.properties.name}
                                    </Card.Title>
                                    <Card.Text>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <strong>Damage:</strong> {weapons.properties.damage} 
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>Cost:</strong> {weapons.properties.cost} gp
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>Class</strong> {weapons.properties.Class}
                                            </ListGroup.Item> 
                                            <ListGroup.Item>
                                                <strong>Type</strong> {weapons.properties.class}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                        </Col>
                </Row>
        </Container>
    
       
    );
};

export default WeaponsViewer;