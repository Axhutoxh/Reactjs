import React, { Component } from 'react'

export default class Images extends Component {

    constructor(props){

        super(props);
            this.state ={interval : null};
        
        }

    componentDidMount(){
        this.setState({
            interval : setInterval(()=>{
                console.log("1");
            },2000),
        });
    }

    componentWillUnmount(){
        console.log("Images Unmount");
        clearInterval(this.state.interval);
    }
    render() {
        return (
            <img src="https://images.unsplash.com/photo-1604102387673-48ab602201ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
        )
    }
}
