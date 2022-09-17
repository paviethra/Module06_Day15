import React from 'react';
import Select from 'react-select';
import './Navbar.css';
 
const Navbar = ({userLang, setUserLang,fontSize, setFontSize}) => {
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];

    return (
        <div className="navbar">
            <h1>Code Compiler</h1>
            <Select className='languages' options={languages} value={userLang}
                    onChange={(e) => setUserLang(e.value)} placeholder={userLang} />
            <label>Font Size</label>
            <input type="range" min="10" max="30" value={fontSize} step="2" 
            onChange={(e) => { setFontSize(e.target.value)}}/>
        </div>
    )
}
 
export default Navbar;