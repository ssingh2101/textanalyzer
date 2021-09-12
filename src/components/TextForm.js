import { useState } from "react";


const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase())
        // props.showAlert("Converted to UpperCase", "success")

    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
        // props.showAlert("Converted to LowerCase", "success")
    }

    const handleClearClick = () => {
        setText('')
        // props.showAlert("Console cleared", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard", "success")
    }

    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(" "))
        props.showAlert("Extra spaces has been removed", "success")
    }

    const handleCharOccurence = () => {
        let uniqueChars = getUniqueChars(text)
        let counterMap = getCharCount(uniqueChars, text)

        props.setShowModal(true, counterMap)
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const getCharCount = (uniqueChars, text) => {
        let counterMap = new Map();

        for (let i = 0; i < uniqueChars.length; i++) {
            let count = 0;
            for (let j = 0; j < text.length; j++) {

                if (text.charAt(j) === uniqueChars[i]) {
                    count += 1;
                }
            }
            counterMap.set(uniqueChars[i], count)
        }
        return counterMap;
    }

    const getUniqueChars = (text) => {
        let uniqueChars = text;

        return uniqueChars.split('').filter(function (item, pos, self) {
            return self.indexOf(item) === pos;
        }).filter((item) => { return (item !== ' ' && item !== '\n') }).join('');

    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="my-3">
                    <h3>{props.heading}</h3>
                    <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? '#03203C' : '#ced4da', color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '1px solid white' : '1px solid black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCharOccurence}>Find characters occurence</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((word) => { return word.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((word) => { return word.length !== 0 }).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    )
}

export default TextForm;
