import React , {useState} from 'react'

export default function TextForm(props) {

    const handleExtraSpaces=()=>{
        let spaceText=text.split(/[ ]+/);
        setText(spaceText.join(" "))
        props.showAlert('Removed Extra Spaces!','success');
    }
    const handleCopy = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copied To Clipboard!','success');

    }
    const handleUpClick = () =>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Converted To Uppercase!','success');
    }
    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('Converted To Lowercase!','success');

    }
    const handleClClick = () =>{
        let newText="";
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log('On Change')
        setText(event.target.value)
    }
    const [text,setText]= useState('');
  return (
    <>
    <div class='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
        </div>
        <button class="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button class="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button class="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
        <button class="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button class="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div class='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
    </div>
    </>
  )
}
