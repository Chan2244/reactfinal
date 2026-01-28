import React from "react";
import MonstersComponent from "../src/Components/ClassesComponents";
import { Container, Form, FormControl } from "react-bootstrap";

const Monsters = () => {
    return (
        <Container>
            <h2 className="text-center mb-4">Pathfinder Monsters</h2>
            <Form className="d-flex mb-4">
                <FormControl
                    type="search"
                    placeholder="Search monsters"
                    className="me-2"
                    aria-label="Search"
                    value=""
                    onChange={""} // Update with search handler later
                />
            </Form>
            <MonstersComponent />
        </Container>
    );
};

export default Monsters;