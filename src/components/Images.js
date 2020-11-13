import React, { useEffect, useRef, useState } from 'react';
import useFetchImage from '../utils/hooks/useFetchImage';
import useScroll from '../utils/hooks/useScroll';
import Image from "./image";

export default function Images() {
  const [page, setPage] = useState(1)

   // const [myinterval, setmyinterval] = useState(null);
  const [images,setImages] = useFetchImage(page); 
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); 
   // console.log(varRef);


  }, []);


const [newImageUrl, setNewImageUrl] = useState("");

function handleRemove(index){
   // setimages(images.filter((image,i)=> i != index)); //filter operator
   setImages([...images.slice(0,index),...images.slice(index+1,images.length)]); //spread operator
}



// function crossclass(){
//     return `fas fa-times  absolute right-0 cursor-pointer opacity-25  hover:opacity-100 ${isHovering?"":"hidden"}`;
// }

function ShowImage(prams){
    return images.map((img,index)=>(<Image 
       image={img.urls.regular} 
       handleRemove={handleRemove} 
       index={index} 
       key={index}/>
    ));}


  function handleAdd(){
      if(newImageUrl != " "){
        setImages([newImageUrl,...images]);
        setNewImageUrl(" ");
    
      }

  }

function handleChange(event){
   setNewImageUrl(event.target.value);


}

  return (
        <section>
            <div className="gap-0" style ={{columnCount:6}}> 
                <ShowImage  />
            </div>
            <button onClick={()=> setPage(page+1)}> Load More</button>
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
