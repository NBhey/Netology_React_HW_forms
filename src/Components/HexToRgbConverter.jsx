import React, { useState } from "react";

//#FF5733
//#DC143C
//#9ACD32
const HexToRgbConverter = () => {
  let [colorInputHex, setColorInputHex] = useState("#34495e");
  let [colorRGB, setColorRGB] = useState(`rgb(52, 73, 94)`);

  const main = {
    backgroundColor: colorInputHex,
    width: "100%",
    height: "100vh",
    margin: " 0 auto",
    textAlign: " center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "background-color 0.3s",
  };

  const onInputSuccessfully = (e) => {
    setColorInputHex(e);
    const r = parseInt(e.substring(1, 3), 16);
    const g = parseInt(e.substring(3, 5), 16);
    const b = parseInt(e.substring(5, 7), 16);
    setColorRGB((colorRGB = `rgb(${r}, ${g}, ${b})`));
  };

  const onInputChange = (e) => {
    colorInputHex = e.target.value;
    if (colorInputHex.length === 7) {
      if (/^#[0-9A-Fa-f]{6}$/.test(colorInputHex)) {
        onInputSuccessfully(colorInputHex);
      } else {
        setColorRGB(`Ошибка!`);
      }
    }
  };

  return (
    <main style={main}>
      <div>
        <input
          type="text"
          maxLength="7"
          onInput={onInputChange}
          placeholder={colorInputHex}
        />
        <p>{colorRGB}</p>
      </div>
    </main>
  );
};

export default HexToRgbConverter;
