import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetClassesById } from '..public/app/src/API/ClassesApi';
import { Card, Col, Container, ListGrop, Row, Spinner } from 'react-bootstrap';
import { sentenceCase } from 'change-case';
import ClassesViewer from "../Components/ClassesViewer";

const ClassesViewer = () => {
    const { id } = useParams(); // Get class ID from URL params
    const [classes, setClasses] = useState(null);
     return (
        <Container>
            <h2 className="text-center mb-4">Character Details</h2>
            <ClassesViewer />
        </Container>
     );
};
    //Fetch class data by ID
    useEffect(() => {
        GetClassesById(id).then((res) => {
            setClasses(res.data.result);
        });
    }, [id]);

    return (
        <Container className="my-5">
            {classes ? (
                <Row>
                    {/* Left Column - Classes Details */}
                        <Col md={6} className='mb-4'>
                            <Card className='shadow-sm'>
                                <Card.Body>
                                    <Card.Title className='display-5 mb-3'>
                                        {classes.properties.name}
                                    </Card.Title>
                                    <Card.Text>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <strong>Hitpoints:</strong> {classes.properties.hitpoints}hp 
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>Wealth:</strong> {classes.properties.wealth} gp
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>ClassAlignment</strong> {classes.properties.classAlignment}
                                            </ListGroup.Item> 
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                        </Col>
                </Row>
        </Container>
            ) : (
                      // Loading Spinner
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <Spinner animation='grow' />
                </Container>
            )}
       
    );
};

export default VieweClasses;