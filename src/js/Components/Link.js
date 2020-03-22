import React from 'react'
import styles from './Link.scss'
import classNames from 'classnames'
import _ from 'lodash'


export default function Element (props){

    return (
        <a 
            {...props}
            className={classNames({
                [styles.styled]:true,
                [styles.active]:Boolean(props.active)
            }, _.get(props, 'className', ""))} 
            > {props.children}</a> 
    )
}


// this['Link'] = Element