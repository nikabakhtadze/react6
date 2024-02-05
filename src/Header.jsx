import React from "react";
class Header extends React.Component{
    render(){
        return(
           <React.Fragment>
            <nav>
                <a href="#">home</a>
                <a href="#">details</a>
                <a href="#">partners</a>
                <a href="#">details</a>
            </nav>
           </React.Fragment>
        )
    }
}
export default Header