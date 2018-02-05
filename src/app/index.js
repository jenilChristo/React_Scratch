import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            siteName:"Contact Management",
            homeMounted:true
        }
        console.log("constructor")
    }
    onChangemounted(){
        this.state = {
            homeMounted:false
        }
    }
    componentWillMount(){
        console.log("Component will mount")
    }   
    componentDidMount(){
        console.log("Component did mount");
    }
    componentWillRecieveProps(nextProps){
        console.log("component will receive props",nextProps)
    }
    shouldComponetUpdate(nextProps,nextState){
        console.log("should component update",nextProps,nextState)
    }
    componentWillUpdate(nextProps,nextState){
        console.log("component will update",nextProps,nextState)
    }
    componentDidUpdate(prevProps,prevState){
        console.log("component did update",prevProps,prevState)
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    changeSiteName(newName){ 
        this.setState({
            siteName:newName
        });
    };
    greetuser (){
        alert("Hello User! Welcome to react");
    }

    render (){
     let ho = ["sports","Study","coding"];
     let homeComp = "";
     if(this.state.homeMounted){
        homeComp =
        <Home  
        initialSiteName={this.state.siteName}
        changeName ={(newName)=>this.changeSiteName(newName)} 
        greet={this.greetuser}
         name={"jenil"} 
         initialAge="12" 
         hobbies={ho}
          />
     }
       return(
           <div>
            <Header 
                siteName={this.state.siteName}  
                homeLink="/home"
                newContactLink="/new-contact"
                 myContactsLink="/my-contacts"
            />   
            <div className="row">
                <div className='col-xs-10'>
                    <button className="btn btn-warning" onClick={()=>onChangemounted}>(Un)Mount Component</button>
                {homeComp}
                </div>
            </div>
            </div>
        ) ;
    }
}
render(<App/>,window.document.getElementById("app"));