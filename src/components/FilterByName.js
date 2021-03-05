import React from 'react';

const FilterByName = props => {
    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };

    const handleReset = () => {
        props.handleReset();
    };

    return (
        <fieldset className="form-section__container">
            <label htmlFor="character" className="form-section__label">Name</label>
            <input type="text"
                id="character"
                name="character"
                placeholder="Search your favorite character"
                className="form-section__input"
                onChange={handleChange}
                value={props.nameFilter}>
            </input>
            <span className="reset-btn fas fa-sync-alt" onClick={handleReset}></span>
        </fieldset>
    );
};

export default FilterByName;