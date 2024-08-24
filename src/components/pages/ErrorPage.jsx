import './Error.css';
import errorImage from "../../assets/error.gif";
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <div className="error-container">
            <img src={errorImage} alt="Error" />
            <div>
                <h1>The Page you are looking for not found.</h1>
                <NavLink to="/">Back to Home</NavLink>
            </div>
        </div>
        
    );
};

export default Error;