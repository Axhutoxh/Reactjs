import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/style.css";
import Images from "./components/Images";


function Gallery(){
    return(
     <section className = "flex justify-center">
    <div className = "w-10/12">
        <div className = "text-center">
                <Images /> 
         </div> 
         </div>
    </section>
    );
}

function Fun(){


    return (
    <Router>
        <Route path="/gallery">
            <Gallery />
        </Route>
    </Router>
    );

}



export default Fun;
