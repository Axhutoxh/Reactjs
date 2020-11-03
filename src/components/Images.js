import React, { useEffect, useState } from 'react'


export default function Images() {

   // const [myinterval, setmyinterval] = useState(null);

    useEffect(()=> {
     console.log("images mounted");
           const interval = setInterval(()=>{
             console.log("hello");
             },1000)
         ;

        return()=>{
            clearInterval(interval);
        }


    },[])
    const Images = [ 
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1604367078108-3ed095682132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1604361709763-44f7fc6dd075?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1602526428496-8346b5cf9954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=727&q=80",
    "https://images.unsplash.com/photo-1604329051903-d89ddd523330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    "https://images.unsplash.com/photo-1604326208115-ce65e78475c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80",
    "https://images.unsplash.com/photo-1604102387673-48ab602201ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    ];

function ShowImage(prams){
    return (Images.map((image)=>{
        return (
    <div>
        <img src={image} width ="180" />
    </div>
    );
  })
    );}

    return (
        <section>
            <div className="flex justify-center"> 
                <ShowImage  />
            </div>
                <div className="flex justify-between my-5"> 
                    <input type="text" className="p-2 border border-gray-800 shadow "/>
                    <button className="p-1 bg-green-600 text-white">Add New</button>
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
