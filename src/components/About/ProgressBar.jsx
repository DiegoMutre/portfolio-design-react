import PropTypes from "prop-types";

export const ProgressBar = ({ skill }) => {
    return (
        <div className="progress-bar">
            <p className="progress-text">
                {skill.technology}
                <span>{skill.percent}</span>%
            </p>
            <div className="progress-percent"></div>
        </div>
    );
};

ProgressBar.propTypes = {
    skill: PropTypes.object.isRequired,
};
