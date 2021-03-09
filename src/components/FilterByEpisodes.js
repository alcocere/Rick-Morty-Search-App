import React from 'react';

const FilterByEpisodes = props => {
    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'episodes'
        });
    };

    return (
        <div className="form-section__container">
            <label htmlFor="character" className="form-section__label"></label>
            <input type="number"
                id="episode"
                name="episode"
                placeholder="episodes"
                className="form-section__input"
                onChange={handleChange}
                value={props.episodesFilter} />
        </div>
    );
};

export default FilterByEpisodes;