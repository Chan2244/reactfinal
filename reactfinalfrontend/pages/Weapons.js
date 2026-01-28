import Next from "next";
import WeaponsComponent from ".../src/Components/ClassesComponents";
import { Container, Form, FormControl } from "react-bootstrap";

const Weapons = () => {
    return (
        <Container>
            <h2 className="text-center mb-4">Pathfinder Weapons</h2>
            <Form className="d-flex mb-4">
                <FormControl
                    type="search"
                    placeholder="Search Weapons"
                    className="me-2"
                    aria-label="Search"
                    value=""
                    onChange={""} // Update with search handler later
                />
            </Form>
            <WeaponsComponent />
        </Container>
    );
};

export default Weapons;