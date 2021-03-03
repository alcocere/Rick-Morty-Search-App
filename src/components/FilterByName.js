import React from 'react';

const FilterByName = props => {
    const handleChange = (ev) => {
        // console.log(ev.type,);
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };

    return (
        <fieldset>
            <label htmlFor="character" className="form-section__label">Name</label>
            <input type="text"
                id="character"
                name="character"
                placeholder="Search you favorite character"
                className="form-section__input"
                onChange={handleChange}>
            </input>
        </fieldset>
    );
};

export default FilterByName;