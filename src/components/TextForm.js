import { useState } from "react";


const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase", "success")

    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase", "success")

    }

    const handleClearClick = () => {
        setText('')
        props.showAlert("Console cleared", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success")

    }

    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(" "))
        props.showAlert("Extra spaces has been removed", "success")
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="my-3">
                    <h3>{props.heading}</h3>
                    <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? '#03203C' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview'}</p>
            </div>
        </>
    )
}

export default TextForm;
