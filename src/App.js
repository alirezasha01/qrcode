import React from "react";
import BasicInput from "./ui/basic-input"
import { useState } from "react";
import QRCode from "react-qr-code";
import LiveQrCode from "./components/live-qr-code"

const App = () =>{
  const [qrText, setQrText] = useState("")
  const [qrCode, setQrCode] = useState("")

  const generateQrCode = () =>{
    QRCode.toDateURL(qrText,{
      width:900,
      margin:3,
    },(err , url)=>{
      if(err) return console.log("err")
      setQrCode(url)
    })
  }

  const handleQrCode = (e) =>{
    setQrText(e.target.value)
    generateQrCode()
  }

  return (
    <div className="App">
      <LiveQrCode value={qrText} />
      <BasicInput
      lable = "qr code text"
      type = "text"
      value = {qrText}
      onChange={handleQrCode}
      style = {{marginTop:20}}
      />
      <br />
      <a href={qrCode} download={`${qrText}.png`}>download</a>
    </div>
  )
}

export default App;
