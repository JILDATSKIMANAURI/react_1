import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

class Index extends Component{
  render (){
    return(
      <div>
        <h1>გამარჯობა!</h1>
        <hr />
        <p>როგორ ხარ?</p>
      </div>     
    )
  }
}
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Index />);

