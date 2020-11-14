import { render } from "@testing-library/react";
import React from "react";
import "./assets/css/style.css";
import Images from "./components/Images";


function Fun(){


    return (
         <section className = "flex justify-center">
            <div className = "w-10/12">
                <div className = "text-center">
                        <Images /> 
                 </div> 
                 </div>
        </section>

    );
}

// class Fun extends React.Component{
//     // constructor(props){
//     //     console.log("Fun constructor");
//     //     super(props);
//     //     .state ={title:"hello dude ", isShowing:false};
//     // }
// // stattes are Immutable 

// componentDidMount(){
//     console.log("Fun Mount");
//    // .setState({title:"Hello React"});
// }

// componentDidUpdate(){
//     console.log("Fun Updated")
// }





// render(){
//     console.log("Fun render");
//     return (

//     );
// }
// }

export default Fun;
