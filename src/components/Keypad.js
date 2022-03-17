// Code Keypad Component Here
import React from 'react'

function Keypad() {

    function passwordHandler(){
        console.log('Entering password...')
    }

  return (
    <div>Keypad
        <input onChange={passwordHandler} type="password" />
    </div>
  )
}

export default Keypad