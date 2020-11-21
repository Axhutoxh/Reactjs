import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from "../config/firebase"

export default function Header() {
  const [isLoggenIn, setIsLoggenIn] = useState(false);
  const history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        setIsLoggenIn(true);
      }
    })
  },[])

  function logout(){
    firebase
    .auth()
    .signOut()
    .then((res)=> {
      setIsLoggenIn(false);
      history.replace("/login");
    }).catch((e)=>{
      console.log(e.response.data);
    })

  }
    return (
        <nav className="py-4 bg-gray-900 text-white">
          <ul className="flex justify-between px-10">
          <span className="flex ">
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
              <Link to="/gallery">Gallery</Link>
            </li >
            </span>
            <li>
              {
                isLoggenIn ?
                <button onClick={logout}>Logout</button>:
                <Link to="/login">Login</Link>
  
              }
            </li>
          </ul>

        </nav>
    )
}
