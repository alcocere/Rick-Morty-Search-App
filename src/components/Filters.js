import React from "react"
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import "../stylesheets/layout/Filters.scss";

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
            </form>
        </section>
    );
};

export default Filters;    