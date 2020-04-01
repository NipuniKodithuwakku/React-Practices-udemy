import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
//functional component

// const App = ()=>{
//      window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (err)=>console.log(err)
//     );
//     return (
//         <div>Hi there!</div>
//     );

// }

//class component

class App extends React.Component{
    // constructor(props){
    //     super(props);

    //     //this is only time we do direct assignment to this.state

    //     this.state = { lat:null,errorMessage:"" };

    // window.navigator.geolocation.getCurrentPosition(
    //     (position)=>{

    //         //to update state we called setState
    //         this.setState({lat : position.coords.latitude});
    //     },
    //     (err)=>{
    //         this.setState({errorMessage:err.message});
    //         }
    // );


    // }

    //Alter way of doing state initialization
    state = { lat:null,errorMessage:""};

    componentDidMount(){
         window.navigator.geolocation.getCurrentPosition(
        position=>this.setState({lat : position.coords.latitude}),
        err=>this.setState({errorMessage:err.message})
     );
    }

    renderContent(){
        if(this.state.lat && !this.state.errorMessage){
                // return <div>Latitude :{this.state.lat}</div>;
                return <SeasonDisplay lat={this.state.lat}/>;
            }
            if(!this.state.lat && this.state.errorMessage){
                return <div>Error :{this.state.errorMessage}</div>;
            }

           return  <Spinner message="Please accept the location request"/>;

    }

    render(){
    //     window.navigator.geolocation.getCurrentPosition(
    //     (position)=>console.log(position),
    //     (err)=>console.log(err)
    // );

    //    return(
    //         // <div>
    //         //     Latitude : {this.state.lat}
    //         //     <br/>
    //         //     Error : {this.state.errorMessage}
    //         // </div>
    //    );
    return (
        <div className="border red">
            {this.renderContent()}
        </div>
    );

            
       
        
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));