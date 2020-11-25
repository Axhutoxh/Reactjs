import React, { useEffect, useState } from "react";
import { Route,Switch, useLocation} from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import routes from './utils/routes/index';
import firebase from './config/firebase'
import FunContext from "./store/FunContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/404";
import AnimatedRoute from "./utils/routes/AnimatedRoute";
import { AnimatePresence } from "framer-motion";

function Fun(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        firebase.auth().onAuthStateChanged((user)=>{
          if (user){
            setIsLoggedIn(true);
            setUser(user);
            setIsLoading(false);
          }
          else{
              setUser({});
              setIsLoggedIn(false);
              setIsLoading(false);
          }
        })
      },[])
      const location =useLocation();
      if(isLoading) return <Loading />

     return (

            <FunContext.Provider value={[isLoggedIn,user]}>
            <Header />
            <AnimatePresence exitBeforeEnter initial={false}>
            <Switch key={location.pathname} location = {location}>
                {
                    routes.map((route,index)=> {
                        if(route.protected == 'guest'){
                            return (
                                <GuestRoute 
                                key={index}
                                path={route.path} 
                                exact={route.exact} 

                                >
                                <route.component />
                                </GuestRoute>

                            )

                        }
                        if(route.protected == 'auth'){
                            return (
                                <AuthRoute 
                                key={index}
                                path={route.path} 
                                exact={route.exact} 
                                >
                                <route.component />
                                </AuthRoute>

                            )
                        }
                            return (
                                <AnimatedRoute 
                                key={index}
                                path={route.path} 
                                exact={route.exact} 
                                >
                                <route.component />
                                </AnimatedRoute>
                                )

                    }
                    )}
                    <Route
                        path='*'
                    >
                        <NotFound/>

                    </Route>

         </Switch>
         </AnimatePresence>
         </FunContext.Provider>

     );

}



export default Fun;
