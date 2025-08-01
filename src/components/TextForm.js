import React, { useState } from "react";

export default function TextForm({ heading , mode , showAlert}) {
  const handleUpClick = () => {
    // console.log("UpperCase Was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
    showAlert("Text has been converted to UpperCase ✅" , "success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
    showAlert("Text has been converted to LowerCase ✅" , "success")
  };
  const toTitleCase =()=>{
    let txtArr = text.replace(/\w\S*/g ,(word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setText(txtArr);
    showAlert("Text has been converted to TitleCase ✅" , "success")
  }
  const handleInvert = () => {
    let newText = Array.from(text);
    let InverseText ="";
    for (let index = newText.length-1; index >=0; index--) {
      InverseText += newText[index];
    }
    setText(InverseText);
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
    showAlert("Text has been Inverted ✅" , "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
  };
  const handleClearClick = () => {
    setText('');
    document.getElementById("copyBtn").textContent="Copy to Clipboard";
    showAlert("Text Area has been Cleared ✅" , "success")
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    console.log("Copied to Clipboard");
    document.getElementById("copyBtn").textContent="Copied to Clipboard✅";
    showAlert("Copied to Clipboard ✅" , "success")
  };
  const [text, setText] = useState("");

  //text - state variable
  //"enter text here"--> default value of text
  // wrong way to change the value of the state variable text="ldjflaj"; never ever use this instead of use this
  //setText("new updated value of text" )--> used to set the value of text

  return (
    <>
      <div className="container mb-3">
        <label htmlFor="myBox" className={`form-label text-${mode ==='dark'||mode ==='warning' ? 'light' : 'dark'}`}> <h2>{heading}</h2></label>
        <textarea className="form-control" id="myBox"rows="10"onChange={handleOnChange}value={text} placeholder="Enter Your Text here !"></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${mode===`light` || mode==='dark' ?`primary`:mode} mx-2 my-1 text-light`} onClick={handleUpClick}>Convert to Uppercase </button>
      <button disabled={text.length===0} className={`btn btn-${mode===`light` || mode==='dark' ?`primary`:mode} mx-2 my-1 text-light`} onClick={handleLowClick}>Convert to Lowercase </button>
      <button disabled={text.length===0} className={`btn btn-${mode===`light` || mode==='dark' ?`primary`:mode} mx-2 my-1 text-light`} onClick={toTitleCase}>Convert to Title Case </button>
      <button disabled={text.length===0} className={`btn btn-${mode===`light` || mode==='dark' ?`primary`:mode} mx-2 my-1 text-light`} onClick={handleInvert}>Invert text</button>
      <button disabled={text.length===0} className={`btn btn-${mode===`light` || mode==='dark' ?`primary`:mode} mx-2 my-1 text-light`} onClick={handleClearClick}>Clear TextArea</button> 
      <button disabled={text.length===0} className={`btn btn-${mode===`light` || mode==='dark' ?`primary`:mode} mx-2 my-1 text-light`} id="copyBtn" onClick={copyText}>Copy to Clipboard</button> 

        <div className={`container my-3 text-${mode ==='dark'||mode ==='warning' ? 'light' : 'dark'}`}>
            <h2>Your Summary</h2>
           <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} Words And {text.length} Characters</p>
          <h3>Reading time is: {(0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)).toFixed(2)} Minutes</h3>

            <h1>Preview</h1>
            <p  style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }} >
                {text.length>0 ? text : "Enter some text to the Text box to preview it here !"}</p>
                <p></p>
        </div>
    </>
  );
}

// 13:37
