import React from 'react';

const FilterByName = props => {
    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };

    return (
        <div className="form-section__container">
            <label htmlFor="character" className="form-section__label"></label>
            <input type="text"
                id="character"
                name="character"
                placeholder="Search your favorite character"
                className="form-section__input"
                onChange={handleChange}
                value={props.nameFilter} />
            <span className="resetbtn-icon fas fa-times" onClick={props.handleReset}></span>
        </div>
    );
};

export default FilterByName;