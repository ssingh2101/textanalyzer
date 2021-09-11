import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={props.mode === 'light' ? { backgroundColor: '#adb5bd' } : { backgroundColor: '#003d5b' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.tab1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.tab2}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}

                    <div className="form-check form-switch mx-5">
                        <input onClick={props.toggle} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    tab1: PropTypes.string,
    tab2: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Analyze Your Text',
    tab1: 'Home',
    tab2: 'About'
}

export default Navbar;