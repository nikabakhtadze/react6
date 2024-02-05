import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import "./style.css";
import Footer from "./Footer"
class Nika extends React.Component{
  render() {
    function nika(){
      window.alert("hello world")
    }
     return (
       <React.Fragment>
        <Header></Header>
        {
          < button typr="button" onClick={nika}>დააკლიკეთ</button>
        }
        <Footer></Footer>
       </React.Fragment>
    );
  }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Nika></Nika>);