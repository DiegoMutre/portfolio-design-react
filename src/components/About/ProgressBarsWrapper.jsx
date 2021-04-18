import { ProgressBar } from "./ProgressBar";

const skills = [
    {
        technology: "HTML",
        percent: 97,
    },
    {
        technology: "CSS",
        percent: 89,
    },
    {
        technology: "JavaScript",
        percent: 85,
    },
    {
        technology: "SASS",
        percent: 87,
    },
    {
        technology: "ReactJS",
        percent: 80,
    },
    {
        technology: "NodeJS",
        percent: 70,
    },
    {
        technology: "MongoDB",
        percent: 50,
    },
];

export const ProgressBarsWrapper = () => {
    return (
        <div className="progress-bars-wrapper">
            {skills.map(skill => (
                <ProgressBar key={skill.technology} skill={skill} />
            ))}
        </div>
    );
};
