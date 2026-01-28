import React from "react";
import ClassesComponent from "../src/Components/ClassesComponents";
import { Container, Form, FormControl } from "react-bootstrap";

const Classes = () => {
    return (
        <Container>
            <h2 className="text-center mb-4">Pathfinder Classes</h2>
            <Form className="d-flex mb-4">
                <FormControl
                    type="search"
                    placeholder="Search classes"
                    className="me-2"
                    aria-label="Search"
                    value=""
                    onChange={""} // Update with search handler later
                />
            </Form>
            <ClassesComponent />
        </Container>
    );
};

export default Classes;