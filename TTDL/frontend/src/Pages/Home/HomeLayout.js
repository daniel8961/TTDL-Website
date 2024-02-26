import React from "react";
import { HomeContent } from "./HomeContent";
import '../Pages.css';

function HomeLayout(){
    return(
        <div className="Page">
            <h1>Welcome</h1>

            {HomeContent.map((item, index) => {
                return(
                <div key={index} className="section" id={item.label}>
                    <div className={item.cName} id={item.label}>
                        {/* <div className={item.title}> */}
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        {/* </div> */}
                    </div>
                </div>
                );
            })}
            
        </div>
    );
}
export default HomeLayout;