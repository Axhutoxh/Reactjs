import React, { useEffect, useState } from 'react'


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

    const [images, setimages] = useState([
        "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1604367078108-3ed095682132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1604361709763-44f7fc6dd075?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1602526428496-8346b5cf9954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=727&q=80",
        "https://images.unsplash.com/photo-1604329051903-d89ddd523330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        "https://images.unsplash.com/photo-1604326208115-ce65e78475c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80",
        "https://images.unsplash.com/photo-1604102387673-48ab602201ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        

    ]);

const [newImageUrl, setNewImageUrl] = useState("");

function handleRemove(index){
   // setimages(images.filter((image,i)=> i != index)); //filter operator
   setimages([...images.slice(0,index),...images.slice(index+1,images.length)]); //spread operator
}

const [isHovering, setIsHovering] = useState(false)


// function crossclass(){
//     return `fas fa-times  absolute right-0 cursor-pointer opacity-25  hover:opacity-100 ${isHovering?"":"hidden"}`;
// }

function ShowImage(prams){
    return (images.map((image,index)=>{
        return (
    <div className="w-1/3 my-4 flex justify-center" key={index}>
        <div className="relative"> 
        <i className={`fas fa-times  absolute right-0 cursor-pointer opacity-25  hover:opacity-100 ${isHovering?"":"hidden"}`} onClick={()=>handleRemove(index)}> </i>
        <img src={image} width ="180" onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}/>
        </div>

    </div>
    );
  })
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
            <div className="flex flex-wrap justify-center"> 
                <ShowImage  />
            </div>
                <div className="flex justify-between my-5"> 
                  <div className="w-full">

  
                    <input
                         type="text" 
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
