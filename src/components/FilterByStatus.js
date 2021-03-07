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
            <label key={index} className="checkbox-label">
                <input type="checkbox" name="status" value={status} onChange={handleChange} />
                {status}
            </label>
        );
    });
    return (
        <>
            <label className="checkbox-text" htmlFor="status">
                Status:
          </label>
            {statusElement}
        </>
    );
};

export default FilterByStatus;    
