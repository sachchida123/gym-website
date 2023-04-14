import React from "react";
import './Program.css';
import {programsData} from '.././data/programsData'
const Program=()=>{
    return (
        <div className="program" id="program">Program
            {/* header */}
            <div className="program-header">
                <span className="stroke-text">Explore our</span>
                <span>Programs</span>
                <span className="stroke-text">to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((Program)=>(
                    <div className="category">
                    {Program.image}
                    <span>{Program.heading}</span>
                    <span>{Program.details}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Program