import React from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="text-center my-5">
            <h1>Pathfinder</h1>
            <p className="lead">Explore pathfinder weapons, classes, and monsters</p>
            <Button href="/Classes" variant="primary" size="lg" className="mt-3">
                View, classes, monsters, weapons
            </Button>
        </Container>
    );
};

export default Home;