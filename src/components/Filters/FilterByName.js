import React from 'react';

const FilterByName = props => {
    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };

    return (
        <div className="form-section__filters">
            <label htmlFor="character" className="form-section__label"> Name </label>
            <input type="text"
                id="character"
                name="character"
                placeholder="Search your favorite character"
                className="form-section__input"
                onChange={handleChange}
                value={props.nameFilter} />

        </div>
    );
};

export default FilterByName;