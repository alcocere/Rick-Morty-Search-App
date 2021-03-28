import React from "react"
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecie from "./FilterBySpecie";
import FilterByStatus from "./FilterByStatus";
import FilterSortByName from "./FilterSortByName";

import "../../stylesheets/layout/Filters.scss";
import PropTypes from 'prop-types';

const Filters = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="form-section">
            <form className="form-section__container" onSubmit={handleSubmit}>
                <FilterByName
                    handleFilter={props.handleFilter}
                    nameFilter={props.nameFilter}
                    handleReset={props.handleReset} />
                <FilterByGender
                    handleFilter={props.handleFilter}
                    genderFilter={props.genderFilter}
                    handleReset={props.handleReset} />
                <FilterBySpecie
                    handleFilter={props.handleFilter}
                    specieFilter={props.specieFilter}
                    handleReset={props.handleReset} />
                <FilterByStatus
                    handleFilter={props.handleFilter}
                    status={props.status}
                    statusFilter={props.statusFilter}
                    handleReset={props.handleReset} />
                <FilterSortByName
                    handleFilter={props.handleFilter}
                    sortByName={props.sortByName}
                    handleReset={props.handleReset} />

                <button className="resetbtn" onClick={props.handleReset}>
                    <i className="fas fa-trash-alt"></i> Clear filters</button>
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