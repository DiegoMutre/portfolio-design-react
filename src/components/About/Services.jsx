const services = [
    {
        service: "Creative",
        icon: "far fa-lightbulb",
    },
    {
        service: "Problem Solving",
        icon: "fas fa-cut",
    },
    {
        service: "Fast",
        icon: "fas fa-tachometer-alt",
    },
    {
        service: "Dynamic",
        icon: "fas fa-rocket",
    },
];

export const Services = () => {
    return (
        <div className="services">
            {services.map(service => (
                <li>{service}</li>
            ))}
        </div>
    );
};
