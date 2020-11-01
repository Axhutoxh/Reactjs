import { render } from "@testing-library/react";
import React from "react";
import "./assets/css/style.css";
import Images from "./components/Images";

// function Fun({title}){
//     return <div>
//         <div className = "box">
//         Hello Dude {title}

//         </div>
//      </div>
// }
class Fun extends React.Component{
    constructor(props){
        console.log("Fun constructor");
        super(props);
        this.state ={title:"hello dude ", isShowing:false};
    }
// stattes are Immutable 

componentDidMount(){
    console.log("Fun Mount");
    //this.setState({title:"Hello React"});
}

componentDidUpdate(){
    console.log("Fun Updated")
}


toggleButton = ()=>{
    (this.setState({isShowing:!this.state.isShowing}))
}



render(){
    console.log("Fun render");
    return (
        <section className = "flex justify-center">
            <div className = "w1/2">
                <div className = "my-5 text-center">
                    {this.state.title}
                <div className="text-center" > 
                    <button className="p-1 bg-blue-500 text-white my-2"
                     onClick ={this.toggleButton} >
                        Toggle Image
                    </button>
                </div>
                {this.state.isShowing ? <Images /> :null}
                 </div>

            </div>
        </section>
    );
}
}
export default Fun;
