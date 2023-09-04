import React from "react";
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";

const MainMenu = (props) => {
    return (
        <> 
            <div>
                <NavBar/>
            </div>
            <div>
              <Body/>  
            </div>
        </>
    )
}

export default MainMenu;