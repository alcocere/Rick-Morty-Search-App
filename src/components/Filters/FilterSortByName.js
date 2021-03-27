import "../../stylesheets/layout/Filters.scss";

const FilterSortByName = (props) => {
    const handleOnClick = (ev) => {
        props.handleFilter({
            checked: ev.target.checked,
            key: 'sortByName'
        });
    };
    return (
        <>
            <div className="form-section__filters sortByName">
                <label className='sortByName__filter' htmlFor='sortByName'>
                    Sort by name
                </label>
                <input
                    className='filter_input'
                    name='sort'
                    type='checkbox'
                    id='sort'
                    checked={props.sortByName}
                    onChange={handleOnClick}
                />

            </div>
        </>
    )
}
export default FilterSortByName;