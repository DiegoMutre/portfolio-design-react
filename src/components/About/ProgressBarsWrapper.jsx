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
                // TODO : Show each skill in a component here
                <li>{JSON.stringify(skill, null, 2)}</li>
            ))}
        </div>
    );
};
