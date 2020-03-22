import React from 'react'
import styles from './Nav.scss'
import DropDown from './Dropdown'
import Link from './Link'
import classNames from 'classnames'

export default class Element extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen : false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){
        return (
            <div className={classNames(styles["topnav"], {[styles["open_menu"]]:this.state.isOpen})}>
                <Link href="#home" active={1}>Home</Link>
                <Link href="#news">News</Link>
                <Link href="#contact">Contact</Link>
                <DropDown label="wadaw" white/>
                <Link href="#about">About</Link>
                <Link href="#" 
                    style={{fontSize:15}} 
                    className={styles["icon"]}
                    onClick={this.toggleMenu}>&#9776;</Link>
            </div>
        )
    }
}

Element.defaultProps = {
    items: [{name:'Link', link:'#'}],
};