import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
// import { FiSun } from 'react-icons/fi';
import { ImSun } from 'react-icons/im';

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
                            <Link className="nav-link mx-2" aria-current="page" to="/">{props.tab1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to="/about">{props.tab2}</Link>
                        </li>
                    </ul>

                    <div className="themetoggler">
                        {props.mode === 'light' ? <i style={{ heigh: '20px' }} onClick={props.toggle} type="checkbox"><FaMoon size={25} /></i> : <i onClick={props.toggle} type="checkbox"><ImSun size={25} style={{ color: 'white' }} /></i>}
                    </div>
                </div>
            </div>
        </nav>
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