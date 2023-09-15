import "./HomePage.css"
import Resume from "../../assets/Mark Nguyen Resume 2023-4.pdf"
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ContactPage from '../ContactPage/ContactPage';

export default function HomePage() {
    const myStyle = { 
      backgroundImage: `url(https://64.media.tumblr.com/a95125fbfc8a9f8406a09fec5d2e78dc/d575f17acced1aa6-8c/s400x600/4dca5c0ef6821410b202517588f755a16b2512e0.gif)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "79vh",
      width: "auto",
      }

    return (
      <>
        <div className="home" style={myStyle}>
            <h1>Mark Nguyen</h1>
            <h2>from South Side Chicago.</h2>
            <a className="resume-link" href={Resume} target="_blank" rel="noopener noreferrer">
        View Resume
        <i className="chevron-right"></i>
      </a>
        </div>
        <AboutPage/>
        <ExperiencePage/>
        <ProjectPage/>
        <ContactPage/>
      </>
    );
  }