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

        this.state = { lat:null };


    }

    render(){
        window.navigator.geolocation.getCurrentPosition(
        (position)=>console.log(position),
        (err)=>console.log(err)
    );

        return <div>Lattude: </div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));