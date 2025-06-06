import "./ExperiencePage.css"
import image20 from '../../assets/argonnelogo-2.png'
import image21 from '../../assets/nasalogo.png'
import image22 from '../../assets/newacm.png'
import image23 from '../../assets/lspace.png.webp'




export default function ExperiencePage() {
    return (
        <>
             <div id="experience" className="experience">
            <h1>Experiences.</h1>
            <div className="experience-container">

            <div className="experience-item">
               <div className="experience-content">
              <img src={image21} alt="Description" className="experience-image"/>
                <div className="info">
                  <p>Internship | June 2024 - Aug 2024</p>
                  <h2>Software Engineer Intern</h2>
                  <p2>NASA Ames Research Center - Mountain View, CA</p2>
                  <ul>
                    <li>Identified 3D highways in the skies for Urban Air Mobility in the Dallas Fort Worth Area for future transportation</li>
                    <li>Mapped geometrical corridors with routing models on 30+ sites of interest for landmarks / topological relationships</li>
                    <li>Utilizing R, Open3D to visualize over 1,000 trajectories using data-driven modeling point cloud libraries for FAA</li>
                  </ul>
                </div>
              </div>
              </div>

            <div className="experience-item">
                <div className="experience-content">
                  <img src={image20} alt="Description" className="experience-image"/>
                  <div className="info">
                    <p>Internship | May 2023 - Aug 2023</p>
                    <h2>Software Engineer Intern</h2>
                    <p2>Argonne National Laboratory - Lemont, IL</p2>
                    <ul>
                      <li>Conducted Machine Learning/AI research on streamflow forecasting for US Department of Energy EVS Division</li>
                      <li>Hyperparameter-tuned LSTM Neural Network models by currently 163% through cross-validation and grid search</li>
                      <li>Utilized PyTorch and TensorFlow for deep learning, analyzing big, hourly geospatial and historical streamflow data</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="experience-item">
               <div className="experience-content">
              <img src={image23} alt="Description" className="experience-image"/>
                <div className="info">
                  <p>Mentorship | Jan 2023 - April 2023</p>
                  <h2>New Technology Project Developer</h2>
                  <p2>NASA L'SPACE - Tempe, AZ</p2>
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
                  <p>Leadership | Aug 2022 - Present</p>
                  <h2>Vice President</h2>
                  <p2>IIT Association for Computing Machinery (ACM) - Chicago, IL</p2>
                  <ul>
                    <li>Coordinated the largest computing club in the university by engaging in diverse students' personal projects</li>
                    <li>Led and created a weekly Python Crash Course for 50+ local students from the South Side Chicago neighborhoods</li>
                    <li>Organized my university's annual MLH sponsored Hackathons via Slack, Discord, Notion, Microsoft 365, and Jira</li>
                  </ul>
                </div>
              </div>
              </div>

            </div>
        </div>
        </>
    );
}