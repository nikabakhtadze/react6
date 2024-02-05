import react from 'react';
import surati from "./copyright.jpg"
class Footer extends react.Component{
    render(){
        return(
            <react.Fragment>
            <div className='div'>
            <h1>nika bakhtadze</h1>
           <img src={surati} width="20px" height="20px"></img> 
            </div>
            </react.Fragment>
        )
    }
}
export default Footer