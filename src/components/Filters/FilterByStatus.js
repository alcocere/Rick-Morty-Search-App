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
            <>
                < label key={index} className="status-checkbox" >
                    <input
                        type="checkbox"
                        name="status"
                        value={status}
                        onChange={handleChange}
                        className="status-checkbox__input hide"
                        checked={props.statusFilter.includes(status)}
                    />
                    {status}
                </label >
            </>
        );
    });
    return (
        <>
            <div className="status-checkbox__container">
                <label className="status-checkbox__label" htmlFor="status">
                    Status:
                 </label>
                {statusElement}
            </div>
        </>
    );
};

export default FilterByStatus;
