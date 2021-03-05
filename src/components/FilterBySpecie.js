import React from 'react';

const FilterBySpecie = props => {
    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'specie'
        });
    };
    return (
        <>
            <fieldset className="form-section__container">
                <label htmlFor="specie" className="form-section__label"></label>
                <select
                    id="specie"
                    name="specie"
                    onChange={handleChange}
                    className="form-section__select"
                    value={props.specieFilter}
                >

                    <option value="All" className="form-section__option">All</option>
                    <option value="Human" className="form-section__option">Human</option>
                    <option value="Alien" className="form-section__option">Alien</option>
                </select>
                {/* <div className="resetbtn-container"> */}
                <span className="resetbtn-icon fas fa-sync-alt" onClick={props.handleReset}></span>
                {/* </div> */}
            </fieldset>

        </>
    )
};

export default FilterBySpecie;