import React from 'react';
import './App.css';
import websiteContent from './siteContent'
import './assets/viper_nora.otf'


function App() {
  return (
<div style={{display: 'flex'}}>
    <img style={{maxWidth: "25vw", display: "block", minHeight:"100vh"}}src={require('./assets/caution-642510.jpg')}></img>
    <div style={{minWidth: '50vw', textAlign: "center", color:"#000000", fontFamily:"viper"}}>
      <h1>{websiteContent.Title}</h1>
      <h2 style={{color: "red", fontSize: "20px"}}>{websiteContent.Disclaimer}</h2>
      <iframe src="https://onedrive.live.com/embed?cid=81B4805C909EB4A1&amp;resid=81B4805C909EB4A1%212408&amp;authkey=AN2saMVYEbhlIu0&amp;em=2&amp;wdAr=1.7777777777777777" width="962px" height="565px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
      <h2>{websiteContent.Description_header}</h2>
      <p>{websiteContent.Description_Body}</p>
      <h2>{websiteContent.Credits}</h2>
    </div>
    <img style={{maxWidth: "25vw", display: "block", minHeight:"100vh"}}src={require('./assets/caution-642510.jpg')}></img>
  </div>
  );
}

export default App;
