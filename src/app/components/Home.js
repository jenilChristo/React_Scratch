import React from "react";

export class Home extends React.Component{
    constructor (props){
        super();
        this.state ={
            age:props.initialAge,
            status:0,
            newName:"React 3",
            siteName:props.initialSiteName
        };
    }
    onMakeOlder(){
        this.setState({ 
            age: parseInt(this.state.age)+1
        });
    }
    onSiteNameChange(){ 
        this.props.changeName(this.state.newName);
    }
    onHandlechange(e){
        this.setState({ 
            siteName:e.target.value 
        });
        this.props.changeName(e.target.value);
    }
    render(){
        return (
                <div className="container-fluid">
                     My name is {this.props.name}
                     <br></br>
                     My Age is {this.state.age}
                     <br></br>
                     My hobbies are {this.props.hobbies.map((hobby,key)=><li key={key}>{hobby}</li>)}
                     <br></br>
                     Status: {this.state.status}
                    <p><button onClick={() => this.onMakeOlder()} className="btn btn-success">Make me Older!</button></p>
                    <p><button onClick={this.props.greet} className="btn btn-danger">Greet User!</button></p>
                    <p><button onClick={() => this.onSiteNameChange()} className="btn btn-primary">Change Site Name!</button></p>
                    <p><input type="text" onChange={(event) => this.onHandlechange(event)} value={this.state.siteName}/></p>
                </div>
        );
    }
}
