import React from 'react';
import resume from "../picSrc/Resume.pdf";

const mobiles = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
];

const Resume = () => mobiles.some(mobile => navigator.userAgent.match(mobile))
    ? (
        <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <a href={resume} style={{fontSize: 30}}>Gary Li's Resume</a>
        </div>
    ) 
    : <object data={resume} type="application/pdf" height='100%' width='100%' aria-label="Gary Li's Resume.pdf"/>;

export default Resume;