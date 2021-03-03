import React from "react"
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";

const Filters = (props) => {
    return (
        <section>
            <form>
                <FilterByName handleFilter={props.handleFilter} />
                <FilterBySpecie handleFilter={props.handleFilter} />
            </form>
        </section>
    );
};

export default Filters;    