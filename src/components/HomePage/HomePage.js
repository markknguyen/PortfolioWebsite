import React, { useEffect, useCallback, useRef } from "react";
import "./HomePage.css";
import Resume from "../../assets/SHPE Mark Nguyen Resume 2023 .pdf";
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ContactPage from '../ContactPage/ContactPage';

export default function HomePage() {
    const tmrASCIIRef = useRef(null);
    
    // Use useRef for A and B
    const A = useRef(0);
    const B = useRef(0);

    const rotate = useCallback((x, y, z, a, b) => {
        var yOffset = 0.5;
        y += yOffset;
        var x_rot_y = x * Math.cos(a) - z * Math.sin(a);
        var y_rot_y = y;
        var z_rot_y = x * Math.sin(a) + z * Math.cos(a);
        var x_rot_z = x_rot_y * Math.cos(b) - y_rot_y * Math.sin(b);
        var y_rot_z = x_rot_y * Math.sin(b) + y_rot_y * Math.cos(b);
        var z_rot_z = z_rot_y;
        y_rot_z -= yOffset;
        return {
            x: x_rot_z,
            y: y_rot_z,
            z: z_rot_z
        };
    }, []);

    const asciiframe = useCallback(() => {
        let chars = ".,-~:;=!*#$@";
        A.current += 0.07;  // Increment rotation values using .current
        B.current += 0.03;
        var b = Array(1760).fill(' ');
        var z = Array(1760).fill(0);
        for (let k = 0; k < 1760; k++) {
            b[k] = k % 80 === 79 ? "\n" : " ";
            z[k] = 0;
        }
        for (let x = -2; x < 2; x += 0.01) {
            for (let y = -2; y < 2; y += 0.01) {
                let z_upper = (1 / 1.3) * Math.sqrt(-(x * x + y * y - 1 / 1.5) * (x * x + y * y - 1 / 1.5) - y);
                let z_lower = -(1 / 1.3) * Math.sqrt(-(x * x + y * y - 1 / 1.5) * (x * x + y * y - 1 / 1.5) - y);
                let rotated_upper = rotate(x, y, z_upper, A.current, B.current);
                let rotated_lower = rotate(x, y, z_lower, A.current, B.current);
                
                let ooz_upper = 1 / (1.7 + rotated_upper.z);
                let xp_upper = 0 | (40 + 30 * ooz_upper * rotated_upper.x);
                let yp_upper = 0 | (18 + 15 * ooz_upper * rotated_upper.y);
                let L_upper = Math.floor(ooz_upper * (chars.length - 1) * .9);
                if (L_upper >= chars.length) L_upper = chars.length - 2;
                let idx_upper = xp_upper + 80 * yp_upper;
                if (1760 > idx_upper && idx_upper >= 0 && ooz_upper > z[idx_upper]) {
                    z[idx_upper] = ooz_upper;
                    b[idx_upper] = chars.charAt(L_upper);
                }

                let ooz_lower = 1 / (1.7 + rotated_lower.z);
                let xp_lower = 0 | (40 + 30 * ooz_lower * rotated_lower.x);
                let yp_lower = 0 | (18 + 15 * ooz_lower * rotated_lower.y);
                let L_lower = Math.floor(ooz_lower * (chars.length - 1) * .9);
                if (L_lower >= chars.length) L_lower = chars.length - 2;
                let idx_lower = xp_lower + 80 * yp_lower;
                if (1760 > idx_lower && idx_lower >= 0 && ooz_lower > z[idx_lower]) {
                    z[idx_lower] = ooz_lower;
                    b[idx_lower] = chars.charAt(L_lower);
                }
            }
        }
        document.getElementById('d').innerText = b.join('');
    }, [rotate]);

    useEffect(() => {
        // Start the ASCII animation automatically when the component mounts
        tmrASCIIRef.current = setInterval(asciiframe, 50);

        // Cleanup when component unmounts
        return () => {
            if (tmrASCIIRef.current) {
                clearInterval(tmrASCIIRef.current);
            }
        };
    }, [asciiframe]);

    const myStyle = { 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto",
        width: "auto",
    };

    return (
        <>
            <div className="home" style={myStyle}>
                <h1>Mark Nguyen</h1>
                <h2>from South Side Chicago.</h2>
                <a className="resume-link" href={Resume} target="_blank" rel="noopener noreferrer">
                    View Resume
                    <i className="chevron-right"></i>
                </a>
                <pre id="d"></pre>
            </div>
            <AboutPage/>
            <ExperiencePage/>
            <ProjectPage/>
            <ContactPage/>
        </>
    );
}