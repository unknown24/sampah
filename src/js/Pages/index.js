import React from 'react'
import ReactDOM from 'react-dom'

// import Dropdown from '../Components/Dropdown'
// import Nav from '../Components/Nav'

import styles from './index.scss'

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
                {/* <Nav /> */}
                {/* <Dropdown /> */}
                <div className={styles["section-header"]}>
                    <div className={styles["module-logo"]}>
                        <div className={styles["container-logo"]}>
                            <img src="https://pikobar.jabarprov.go.id/logo.jpg" />
                        </div>
                        <div>
                            <div className="text-1">Something went wrong.</div>
                            <div className="text-2">Something went wrong.</div>
                        </div>
                    </div>
                </div>
                <div className="dummy-height"> </div>
            </>
        )
    }
}
ReactDOM.render(<Index /> , document.getElementById('root'))