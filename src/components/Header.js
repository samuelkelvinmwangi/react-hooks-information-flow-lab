import React from "react";
import { useState } from "react";


function Header (){
    const [isDarkMode, setIsDarkMode] = useState(false);
    function onDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
      }
      return (
        <div className={"App " + (isDarkMode ? "dark" : "light")}>
          <header>
            <h2 onClick={onDarkModeClick}>
                 Header
            </h2>
          </header>
        </div>
      );
}

export default Header;