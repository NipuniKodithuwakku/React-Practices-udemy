import React from 'react';
import ReactDOM from 'react-dom';

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
    constructor(props){
        super(props);

        //this is only time we do direct assignment to this.state

        this.state = { lat:null,errorMessage:"" };

    window.navigator.geolocation.getCurrentPosition(
        (position)=>{

            //to update state we called setState
            this.setState({lat : position.coords.latitude});
        },
        (err)=>{
            this.setState({errorMessage:err.message});
            }
    );


    }

    render(){
    //     window.navigator.geolocation.getCurrentPosition(
    //     (position)=>console.log(position),
    //     (err)=>console.log(err)
    // );

        return (
            <div>
                Latitude : {this.state.lat}
                <br/>
                Error : {this.state.errorMessage}
            </div>
        );
        
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));