import { render } from "@testing-library/react";
import React,{ useState , useEffect ,useRef} from "react";
import "./assets/css/style.css";
import Images from "./components/Images";


function Fun(){
    const [title, setTitle] = useState("hello Dude"); 
    const [isShowing, setisShowing] = useState(false);
    const [didMount, setdidMount] = useState(false);
    const mountRef = useRef(false);
   
//component did mount only   
    useEffect(()=> {
        setdidMount(true);
        console.log("Fun Mount");
    },[]);

//component will updated
    useEffect(()=> {
        if (mountRef.current){
        console.log("fun updated");
        }
        else{
            mountRef.current=true;
        }
    },[isShowing]);


    function toggleButton(){
        setisShowing(!isShowing);
    }
    
    return (
         <section className = "flex justify-center">
            <div className = "w-1/2">
                 <div className = "my-5 text-center"> 
                    {title}
                    </div>
                    <div className="text-center" > 
                        <button className="p-1 bg-blue-500 text-white my-2" onClick ={toggleButton} >
                            Toggle Image
                        </button>
                        {isShowing ? <Images /> :null}
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
