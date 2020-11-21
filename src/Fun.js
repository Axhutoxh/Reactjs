import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import routes from './utils/routes';


function Fun(){
     return (
        <Router>
            <Header />
            <switch>
                {
                    routes.map((route,index)=> (
                        <Route 
                        key={index}
                        path={route.path} 
                        exact={route.exact} 
                        component={route.component}
                        />
                    ))}
         </switch>
    </Router>
     );

}



export default Fun;
