import { useEffect, useState } from "react";
import { Project } from "./Project";

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await fetch("http://192.168.100.19:4000/projects");
            const { projects } = await data.json();
            setProjects(projects);
        };

        fetchProjects();
    }, []);

    return (
        <section className="section-3" id="section-3">
            <h1 className="section-heading">My Projects</h1>
            <div className="projects-wrapper center">
                {projects.map(project => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
