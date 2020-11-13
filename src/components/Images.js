import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Image from "./image";

export default function Images() {

   // const [myinterval, setmyinterval] = useState(null);

    useEffect(()=> {
     console.log("images mounted");
           const interval = setInterval(()=>{
             },1000)
         ;

        return()=>{
            clearInterval(interval);
        }


    },[])

    const [images, setimages] = useState([]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);

  useEffect(() => {
    inputRef.current.focus();
   // console.log(varRef);
    Axios.get('https://api.unsplash.com/photos/?client_id=dIHt8U459VWJLd1gObIWX1wacAAOe-qo7xoxj2EGL3E').then((res)=> {
      console.log(res);
    })

  }, []);


  useEffect(() => {
    varRef.current = varRef.current+1;
  });

const [newImageUrl, setNewImageUrl] = useState("");

function handleRemove(index){
   // setimages(images.filter((image,i)=> i != index)); //filter operator
   setimages([...images.slice(0,index),...images.slice(index+1,images.length)]); //spread operator
}



// function crossclass(){
//     return `fas fa-times  absolute right-0 cursor-pointer opacity-25  hover:opacity-100 ${isHovering?"":"hidden"}`;
// }

function ShowImage(prams){
    return images.map((img,index)=><Image  image={img} handleRemove={handleRemove} index={index} key={index}/>
    );}


  function handleAdd(){
      if(newImageUrl != " "){
        setimages([newImageUrl,...images]);
        setNewImageUrl(" ");
    
      }

  }

function handleChange(event){
   setNewImageUrl(event.target.value);


}

  return (
        <section>
            <h1>{varRef.current} Images</h1>
            <p>Component is updated {varRef.current} times</p>
            <div className="flex flex-wrap justify-center"> 
                <ShowImage  />
            </div>
                <div className="flex justify-between my-5"> 
                  <div className="w-full">

  
                    <input
                         type="text" 
                         id="inputBox"
                         ref={inputRef}
                         className="p-1 border border-gray-800 shadow rounded w-full"
                         value={newImageUrl}
                         onChange={handleChange}
                         />
                  </div>
                  <div className="">


                    <button 
                        disabled={newImageUrl == ""}
                        className={`p-1 text-white ml-2 ${
                        newImageUrl != "" ? "bg-green-600":"bg-green-300"
                        }`} onClick={handleAdd}>Add</button>
                 </div>
                </div>


        </section>
    );
}


 {/* export default class Images extends Component { 

//     constructor(props){

//         super(props);
//             this.state ={interval : null};
        
//         }

//     componentDidMount(){
//         console.log("Images mount");
//         this.setState({
//             interval : setInterval(()=>{
//                 console.log("1");
//             },1000),
//         });
//     }

//     componentWillUnmount(){
//         console.log("Images Unmount");
//         clearInterval(this.state.interval);
//     }
//     render() {
//         return (
//         )
//     }
// } */}
