import React, { useState } from 'react'
import './TextChange.css'

const TextChange = () => {
    const [fontFamily, setFontFamily] = useState("arial");
    
    const changeFont = (e) => {
        const body = document.body;
        setFontFamily(e.target.value);
        body.classList.add(fontFamily);
        
    }

  return (
    <div>
      <select value={fontFamily} onChange={changeFont}>
        <option value="arial" className='arial'>Arial</option>
        <option value="caveat" className='caveat'>Caveat (cursive)</option>
        <option value="verdana" className='verdana'>Verdana</option>
      </select>
    </div>
  )
}

export default TextChange
