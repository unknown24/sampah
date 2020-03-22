import React from 'react'
import ReactDOM from 'react-dom'

import Dropdown from '../Components/Dropdown'
import Nav from '../Components/Nav'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.warn(error, info);
    }

    render(){
        if (this.state.hasError){
            return <h1>Something went wrong.</h1>;
        }


        return (
            <>  
                <Nav />
                {/* <Dropdown /> */}
            </>
        )
    }
}
ReactDOM.render(<Index /> , document.getElementById('root'))