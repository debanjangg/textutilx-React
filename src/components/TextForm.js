import React, {useState} from 'react'
    
    export default function TextForm(props) {
        
        const [text, setText] = useState('Enter text here');
        // text = "updated text" //wrong way to cheange the state
        // setText("updated text") //correct way to cheange the state

        const handleOnChange = (event) => {
            setText(event.target.value)
        }
    
        const handleUpClick = () => {
            setText(text.toUpperCase())
        }    
    
        const handleLoClick = () => {
            setText(text.toLowerCase())
        }
        
        const handleTitleClick = () => {
            const getTitleCase = (str) => {
                let stArr = str.trim().split(' ');
                let res = ""
                for(let x=0; x<stArr.length; x++){
                    let word= stArr[x]
                    res += word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
                }
                return res.trim()
            }
            setText(getTitleCase(text))
        }
        
        const handleCopyClick = () => {
            navigator.clipboard.writeText(text)
        }
        
        const handleSpaces = () => {
            setText(text.trim().replace(/[ ]+/g, ' '))
        }
        
        const handleClearClick = () => {
            setText('')
        }
        
        const getWords = () =>{
            if(text === '')
                return 0
            else
                return text.trim().replace(/\s+/g, ' ').split(' ').length
        }

        return (
            <>
            <div>
                <div className="mb-3 my-3" style={{color: props.theme === 'dark'?'white':'black'}}>
                    <label htmlFor="textBox" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" style={{color: props.theme === 'dark'?'white':'black', backgroundColor: props.theme === 'light'?'white':'gray'}} value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Convert to Titlecase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove excess spaces</button>
            </div>
            <div className='my-4' style={{color: props.theme === 'dark'?'white':'black'}}>
                <h2>Your text summary:</h2>
                <p>{getWords(text)} words, {text.length} characters.<br/>{0.008 * getWords(text) * 60} second read.</p>
                <p></p>
            </div>
            </>
        );
}