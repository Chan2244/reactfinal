import react, { useEffect, useState } from 'react';
import { GetWeapons } from '../API/WeaponsApi';
import { Card, Stack, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MonstersComponent = () => {
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        GetWeapons().then((response) => {
            const monsters = response;
            setWeapons(monsters);
        });
    }, []);

    return (
        <Container className="my-4">
            <Stack gap={3}>
                {monsters.length > 0 ? (
                    monsters.map((weapons, index) => (
                        <Card key={index} className='shadow-sm'>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <Card.Title className='mb-0'>{monsters.name}</Card.Title>
                                    <Card.Text className='text-muted'>Monsters ID: {monsters.uid}</Card.Text>
                                </div>
                                <Link to={`/ViewClasses/${weapons.uid}`} className='btn btn-outline-primary'>View Details</Link>
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

export default MonstersComponent;