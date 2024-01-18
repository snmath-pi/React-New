import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(0);
  const [characters, setCharacters]  = useState(0);
  const [password, setPassword] = useState("")


  // useRef hook

  // const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = ""; let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) {
      str += "0123456789";
    }
    if(characters) {
      str += "~!`@#$%^&*()_-+=/.,";
    }

    for(let i=0; i<length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }

    setPassword(pass);



  }, [length, numberAllowed, characters, setPassword]);

  const copyPasswordtoClipBoard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, characters, passwordGenerator]);
  return (
    <>
      <div
      className=' max-w-md mx-auto shadow-md rounded-lg
      px-4 py-3 my-8 font-bold font-sans text-orange-400 bg-gray-700'
      >
        <h1
      className=' w-full text-4xl text-center text-white my-3'
      >Password Generator</h1>
      <div
      className=' flex shadow mb-7'
      >


        <input type="text" 
        value={password}
        className='outline-none w-full border-none  py-5 px-3 my-3'
        placeholder='Generate Password'
        readOnly
        // ref = {password}
        />

        <button

        onClick={copyPasswordtoClipBoard}
        className='
        outline-none bg-blue-700 text-white px-3 py-0.1 shrink-0
        '
        >Copy</button>


      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>


          <input type="range" 
          min={8}
          max={100}
          value = {length}
          className='cursor-pointer'

          onChange={(e)=>{setLength(e.target.value)}}
          />

          <label>Length: {length}</label>
        </div>

        <div>


          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id = "numberInput"

          onChange={()=>{
            setnumberAllowed((prev)=>(prev^1));
          }}
          
          />

          <label >Numbers</label>
        </div>
        <div>


          <input type="checkbox" 
          defaultChecked={characters}
          id = "numberInput"

          onChange={()=>{
            setCharacters((prev)=>(prev^1));
          }}
          
          />

          <label >Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
