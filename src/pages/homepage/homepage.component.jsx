import React from "react";

import Directory from "../../components/directory/directory"

import "./homepage.scss";

const HomePage = (props) => (
    <div className = "homepage"> 
        {console.log(props)}
       <Directory />
    </div>
)


export default HomePage;