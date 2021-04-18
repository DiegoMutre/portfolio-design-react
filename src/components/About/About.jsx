import "./About.css";
import { ProgressBarsWrapper } from "./ProgressBarsWrapper";
import { Services } from "./Services";

export const About = () => {
    return (
        <section className="section-2" id="section-2">
            <h1 className="section-heading">About Me</h1>
            <ProgressBarsWrapper />
            <Services />
        </section>
    );
};
