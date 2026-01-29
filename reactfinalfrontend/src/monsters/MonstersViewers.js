import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetClassesById } from '.../API/ClassesApi';
import { Card, Col, Container, ListGrop, Row, Spinner } from 'react-bootstrap';
import { sentenceCase } from 'change-case';
import MonstersViewer from "../Components/MonstersViwer"

const MonstersViewer = () => {
    const { id } = useParams(); //Get Monsters ID from URL Params
    const [monster, setMonsters] = useState(null);
    return (
        <Container>
            <h2 className="text-center mb-4">Monster Details</h2>
            <MonstersViewer />
        </Container>
    );
};

    //Fetch monsters data by ID
    useEffect(() => {
        GetMonstersById(id).then((res) => {
            setMonsters(res.data.result);
        });
    }, [id]);

    return (
        <Container className="my-5">
            {monsters ? (
                <Row>
                    {/* Left Colum - Monster Details */}
                    <Col md={6} className='mb-4'>
                    <Card className='shadow-sm'>
                         <Card.Body>
                                    <Card.Title className='display-5 mb-3'>
                                        {monsters.properties.name}
                                    </Card.Title>
                                    <Card.Subtitle className='mb-3 text-muted'>
                                        {sentenceCase(monster.properties.type)}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <strong>Climate:</strong> {character.properties.climate} 
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>Terrain:</strong> {character.properties.terrain} 
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>XP:</strong> {character.properties.Xp}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                    </Card.Body>
                                 </Card>
                            </Col>
                        </Row>
            )}
        </Container>
    );
};

export default ViewMonsters