import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <div className="center">
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loader;
