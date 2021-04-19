import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export const ProgressBar = ({ skill }) => {
    const progressRef = useRef();

    useEffect(() => {
        const progressBar = progressRef.current;
        const observer = new IntersectionObserver(entries => {
            // Check if is watching the element and if it doesn't already has a width
            if (entries[0].isIntersecting && !entries[0].target.style.width) {
                entries[0].target.style.width = `${skill.percent}%`;
            }
        });
        observer.observe(progressBar);

        return () => observer.unobserve(progressBar);
    }, [skill]);

    return (
        <div className="progress-bar">
            <p className="progress-text">
                {skill.technology}
                <span>{skill.percent}</span>%
            </p>
            <div className="progress-percent" ref={progressRef}></div>
        </div>
    );
};

ProgressBar.propTypes = {
    skill: PropTypes.object.isRequired,
};
