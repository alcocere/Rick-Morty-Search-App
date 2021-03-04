import React from 'react';

const FilterBySpecie = props => {
    // console.log(props);
    const handleChange = (ev) => {
        // console.log(ev.type,);
        props.handleFilter({
            value: ev.target.value,
            key: 'specie'
        });
    };
    return (
        <fieldset className="form-section__container">
            <label htmlFor="specie" className="form-section__label">Species</label>
            <select
                id="specie"
                name="specie"
                onChange={handleChange}
                className="form-section__select"
            >
                <option value="All" className="form-section__option">All</option>
                <option value="Human" className="form-section__option">Human</option>
                <option value="Alien" className="form-section__option">Alien</option>
                <option value="Unknown" className="form-section__option">Unknown</option>
            </select>
        </fieldset>
    )
};

export default FilterBySpecie;