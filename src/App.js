import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import './App.css'
import Modal from "./components/Modal";






const App = () => {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)
    const [modal, setModal] = useState(null)

    const setShowModal = (showModal, content) => {
        setModal({
            isOpen: showModal,
            contentLabel: '',
            data: content
        })
    }

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    const toggle = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#03203C'
        } else {
            setMode('light')
            document.body.style.backgroundColor = '#ced4da'
        }
    }


    return (

        <Router>
            <Navbar title="Analyze Your Text" tab1="Home" tab2="About" mode={mode} toggle={toggle} />
            <Alert alert={alert} />
            <Modal modal={modal} setShowModal={setShowModal} />
            <Switch>
                <Route exact path="/">
                    <TextForm showAlert={showAlert} setShowModal={setShowModal} heading="Enter your text to analyze" mode={mode} />
                </Route>

                <Route exact path="/about">
                    <About mode={mode} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
