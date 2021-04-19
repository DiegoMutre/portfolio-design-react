import PropTypes from "prop-types";

export const Project = ({ project }) => {
    return (
        <div className="project">
            <div className="project-text">
                <h2 className="project-name">{project.projectName}</h2>
                <h4 className="project-technologies">{project.technologies}</h4>
            </div>
            <img
                src={project.imageURL}
                alt={project.projectName}
                className="project-img"
            />
            <a href={project.videoURL} className="project-link">
                Go to Video
            </a>
        </div>
    );
};

Project.propTypes = {
    project: PropTypes.object.isRequired,
};
