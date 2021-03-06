const FilterByStatus = props => {
    const handleChange = ev => {
        props.handleFilter({
            value: ev.target.value,
            key: 'status',
            checked: ev.target.checked
        });
    };

    const statusElement = props.status.map((status, index) => {
        return (
            <label key={index} className="display-block">
                <input type="checkbox" name="status" value={status} onChange={handleChange} />
                {status}
            </label>
        );
    });
    return (
        <>
            <label className="form__label display-block" htmlFor="status">
                Status:
          </label>
            {statusElement}
        </>
    );
};

export default FilterByStatus;    
