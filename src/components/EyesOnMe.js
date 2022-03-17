// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {

    function focusHandler(e){
        console.log('Good!')
    }
    function blurHandler(e){
        console.log('Hey! Eyes on me!')
    }
  return (
    <div>EyesOnMe
        <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe