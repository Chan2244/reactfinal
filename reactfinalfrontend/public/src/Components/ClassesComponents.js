import react, { useEffect, useState } from 'react';
import { GetClasses } from '../API/ClassesApi';
import { Card, Stack, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClassesComponent = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        GetClasses().then((response) => {
            const classes = response;
            setClasses(classes);
        });
    }, []);

    return (
        <Container className="my-4">
            <Stack gap={3}>
                {classes.length > 0 ? (
                    classes.map((classes, index) => (
                        <Card key={index} className='shadow-sm'>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <Card.Title className='mb-0'>{classes.name}</Card.Title>
                                    <Card.Text className='text-muted'>Character ID: {classes.uid}</Card.Text>
                                </div>
                                <Link to={`/ViewClasses/${classes.uid}`} className='btn btn-outline-primary'>View Details</Link>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                        <Spinner animation="grow" />
                    </Container>
                )}
            </Stack>
        </Container>
    );
};

export default ClassesComponent;