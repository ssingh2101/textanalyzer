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




const App = () => {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)

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
            <Switch>
                <Route exact path="/">
                    <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
                </Route>

                <Route exact path="/about">
                    <About mode={mode} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
