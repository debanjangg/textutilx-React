import React, {useState} from 'react'
    
    export default function TextForm(props) {
        
        const [text, setText] = useState('Enter text here');
        // text = "updated text" //wrong way to cheange the state
        // setText("updated text") //correct way to cheange the state

        const handleOnChange = (event) => {
            setText(event.target.value)
        }
    
        const handleUpClick = () => {
            if(text === '')
                props.showAlert("danger","No input text for conversion");
            else{
                setText(text.toUpperCase());
                props.showAlert("success","Converted to Upper Case");
            }
        }    
    
        const handleLoClick = () => {
            if(text === '')
                props.showAlert("danger","No input text for conversion");
            else{
                setText(text.toLowerCase());
                props.showAlert("success","Converted to Lower Case");
            }
        }
        
        const handleTitleClick = () => {
            const getTitleCase = (str) => {
                let stArr = str.trim().split(' ');
                let res = ""
                for(let x=0; x<stArr.length; x++){
                    if(x)
                        res += ' '
                    let word= stArr[x]
                    res += word[0].toUpperCase() + word.slice(1).toLowerCase()
                }
                return res.trim()
            }
            if(text === '')
                props.showAlert("danger","No input text for conversion");
            else{
                setText(getTitleCase(text));
                props.showAlert("success","Converted to Title Case");
            }
        }

        const handleCopyClick = () => {
                if(text === '')
                    props.showAlert("danger","No input text to copying");
                else{
                    navigator.clipboard.writeText(text);;
                    props.showAlert("success","Text copied to clipboard");
            }
        }
            
        const handleSpaces = () => {
            if(text === '')
                props.showAlert("danger","No input text for space removal");
            else{
                setText(text.trim().replace(/[ ]+/g, ' '));
                props.showAlert("success","Extra spaces removed");
            }
        }
            
        const handleClearClick = () => {
            if(text === '')
                props.showAlert("danger","Textbox is already clear");
            else{
                setText('');
                props.showAlert("success","Textbox cleared");
            }
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