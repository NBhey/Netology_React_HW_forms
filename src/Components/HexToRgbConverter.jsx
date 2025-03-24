import React, { useState } from "react";

//#FF5733
//#DC143C
//#9ACD32
const HexToRgbConverter = () => {
  let [colorInputHex, setColorInputHex] = useState('#34495e');

  const main = {
    backgroundColor: colorInputHex,
    width: "100%",
    height: "100vh",
    margin: " 0 auto",
    textAlign: " center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: 'background-color 0.3s'
  };
  
  const onInputChange = (e) => {
    if(e.target.value.length === 7){
        console.log('достигло 7')
        setColorInputHex(e.target.value) 
    }
     
  };
  

  return (
    <main style={main}>
      <div>
        <input type="text" maxLength="7" onInput={onInputChange} />
        <p>1234</p>
      </div>
    </main>
  );
};

export default HexToRgbConverter;
