import "./ExperiencePage.css"
import image20 from '../../assets/argonnelogo-2.png'
import image21 from '../../assets/nasalogo.png'
import image22 from '../../assets/newacm.png'




export default function ExperiencePage() {
    return (
        <>
             <div id="experience" className="experience">
            <h1><span className="gradient-text4">Experiences.</span> </h1>
            <div className="experience-container">

            <div className="experience-item">
                <div className="experience-content">
                  <img src={image20} alt="Description" className="experience-image"/>
                  <div className="info">
                    <p>Leadership | Sep 2022 - Present</p>
                    <h2>Event Coordinator</h2>
                    <p2>IIT Association for Computing Machinery (ACM) - Chicago, IL</p2>
                    <ul>
                      <li>Developed and submitted an innovative 8-page space technology proposal and a New Technology Report (NTR)</li>
                      <li>Created and managed KPP, Gantt charts, Risk Matrix, and Quad Charts for project tracking and risk assessment</li>
                      <li>Engaged with Subject Matter Experts (SMEs) including NASA HRP Chief Scientist, Professors, and Engineer</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="experience-item">
               <div className="experience-content">
              <img src={image21} alt="Description" className="experience-image"/>
                <div className="info">
                  <p>Mentorship | Jan 2023 - April 2023</p>
                  <h2>New Technology Project Developer</h2>
                  <p2>NASA L’SPACE - Tempe, AZ</p2>
                  <ul>
                    <li>Developed and submitted an innovative 8-page space technology proposal and a New Technology Report (NTR)</li>
                    <li>Created and managed KPP, Gantt charts, Risk Matrix, and Quad Charts for project tracking and risk assessment</li>
                    <li>Engaged with Subject Matter Experts (SMEs) including NASA HRP Chief Scientist, Professors, and Engineer</li>
                  </ul>
                </div>
              </div>
              </div>

              <div className="experience-item">
              <div className="experience-content">
              <img src={image22} alt="Description" className="experience-image"/>
                <div className="info">
                  <p>Leadership | Sep 2022 - Present</p>
                  <h2>Event Coordinator</h2>
                  <p2>IIT Association for Computing Machinery (ACM) - Chicago, IL</p2>
                  <ul>
                    <li>Developed and submitted an innovative 8-page space technology proposal and a New Technology Report (NTR)</li>
                    <li>Created and managed KPP, Gantt charts, Risk Matrix, and Quad Charts for project tracking and risk assessment</li>
                    <li>Engaged with Subject Matter Experts (SMEs) including NASA HRP Chief Scientist, Professors, and Engineer</li>
                  </ul>
                </div>
              </div>
              </div>

            </div>
        </div>
        </>
    );
}