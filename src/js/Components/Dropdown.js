import React from 'react'
import styles from './Dropdown.scss'

export default function Element (props){
    
    return (
        <div className={styles["dropdown"]} id="sampah--Dropdown">
            <button className={styles[(Boolean(props.white) ? "dropbtn__white"  : "dropbtn")]}> 
                {props.label || "Example"} 
                <i className="fa fa-caret-down"></i>
            </button>
            <div className={styles["dropdown-content"]}>
                {props.items.map(el => <a key={el.name} href={el.link}>{el.name}</a>)}
            </div>
        </div> 
    )
}

Element.defaultProps = {
    items: [{name:'Link', link:'#'}],
};
