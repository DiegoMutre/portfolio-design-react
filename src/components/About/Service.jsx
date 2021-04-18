import PropTypes from "prop-types";

export const Service = ({ service }) => (
    <div className="service">
        <i className={service.icon}></i>
        <h2 className="service-heading">{service.service}</h2>
    </div>
);

Service.propTypes = {
    service: PropTypes.object.isRequired,
};
