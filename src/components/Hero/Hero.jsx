import ProfileImage from "../../images/john-smith.jpg";
import "./Hero.css";

export const Hero = () => (
    <section className="section-1 center" id="section-1">
        <h1 className="section-1-heading">Web Developer</h1>
        <img src={ProfileImage} alt="John Smith" className="person-img" />
        <h3 className="person-name">John Smith</h3>
        <a href="#section-3" className="section-1-btn">
            Projects
        </a>
    </section>
);
