import React from 'react';

const FilterByGender = props => {
    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'gender'
        });
    };
    return (
        <div className="form-section__filters">
            <label htmlFor="gender" className="form-section__label"> Gender</label>
            <select
                id="gender"
                name="gender"
                onChange={handleChange}
                className="form-section__select"
                value={props.genderFilter}
            >

                <option value="All" className="form-section__option">All</option>
                <option value="Female" className="form-section__option">Female</option>
                <option value="Male" className="form-section__option">Male</option>
            </select>
        </div>
    )
};

export default FilterByGender;