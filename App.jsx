import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [numberAllowed, setNumberAllower] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");

  let pass = "";
  let passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)
      str += "0123456789"
    if(charAllowed)
      str += "!@#$%^&*()?[]{}/|<>"
    for(i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, length, password])

  return (
    
  )
}

export default App
