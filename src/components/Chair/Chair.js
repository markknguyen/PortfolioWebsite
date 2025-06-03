import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Chair.css';

export default function Chair() {
    // Array of image paths
    const pdfImages = Array.from({ length: 17 }, (_, i) => require(`../../assets/combinepdf-${String(i + 1).padStart(2, '0')}.png`));

    const arrowStyles = {
        background: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
        borderRadius: '50%',               // circular shape
        width: '2rem',                     // width of the arrow area
        height: '2rem',                    // height of the arrow area
        display: 'flex',                   // to center the icon inside the arrow area
        alignItems: 'center',              // vertical alignment
        justifyContent: 'center',          // horizontal alignment
        fontSize: '1.5rem',                // increase font size for arrow visibility
        textDecoration: 'none !important',  // remove underline with !important
        color: 'white',                    // set arrow color to white
    };

    return (
        <>
            <div class="chair">
                <h1>Ergonomic Musical Chair</h1>
                <div class="chair-container">
                    <div>
                        <p2>During the COVID-19 pandemic, I embarked on an ambitious project in my <b>PLTW</b> (Project Lead The Way) class to create an <b>ergonomic music chair</b> tailored specifically for musicians, particularly violinists like myself. Recognizing the common discomfort and postural issues faced by musicians during long practice sessions, I was driven to design a solution that not only enhances comfort but also supports proper posture. Utilizing <b>Autodesk Inventor CAD</b> software, I meticulously transformed my engineering-approved sketches into precise 3D models, ensuring every curve and angle catered to the ergonomic needs of a violin player. My journey was rigorously documented in a <b>professional engineering notebook</b>, which became a testament to the application of <b>Six Sigma</b> principles in optimizing the chair's design for quality and reliability. This project was not just an academic exercise; it was enhanced by the invaluable mentorship I received from a medical professional, who provided insights into the anatomical aspects of my design. Their guidance was instrumental in refining the chair's ergonomic features to suit the physiological requirements of musicians. Ultimately, this theoretical design leaped into reality in the humble confines of my garage, where I constructed the chair, transforming my vision into a tangible, functional piece that stands as a symbol of my passion for music and engineering.</p2>
                    </div>
                    <Carousel
                        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={arrowStyles}>‹</span>}
                        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={arrowStyles}>›</span>}
                    >
                        {pdfImages.map((imageSrc, index) => (
                            <Carousel.Item key={index}>
                                <img src={imageSrc} alt={`Page ${index + 1}`} className="d-block w-100" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
} 