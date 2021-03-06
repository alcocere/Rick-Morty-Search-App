import React from "react"
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByStatus from "./FilterByStatus";
import "../stylesheets/layout/Filters.scss";
import PropTypes from 'prop-types';

const Filters = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleReset = (props) => {
        props.handleReset();
    };

    return (
        <section className="form-section">
            <form onSubmit={handleSubmit}>
                <FilterByName
                    handleFilter={props.handleFilter}
                    nameFilter={props.nameFilter} />
                <FilterBySpecie
                    handleFilter={props.handleFilter}
                    specieFilter={props.specieFilter}
                    handleReset={props.handleReset} />
                <FilterByStatus
                    handleFilter={props.handleFilter}
                    status={props.status}
                    handleReset={props.handleReset} />
            </form>
        </section>
    );
};

export default Filters;

Filters.propTypes = {
    handleFilter: PropTypes.func,
    nameFilter: PropTypes.string,
    specieFilter: PropTypes.string,
}