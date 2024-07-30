import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        word = word.toLowerCase();
        return word[0].toUpperCase() + word.slice(1)
    }
    
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible dafe show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}.
        </div>
  )
}
