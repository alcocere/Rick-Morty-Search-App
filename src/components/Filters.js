import React from "react"


const Filters = (props) => {
    const handleChange = (ev) => {
        // console.log(ev.type,);
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };

    return (
        <section>
            <form>
                {/* Character name */}
                <fieldset>
                    <label htmlFor="character" className="form-section__label">Name</label>
                    <input type="text" id="character" name="character" placeholder="Search you favorite character" className="form-section__input" onChange={handleChange}>
                    </input>
                </fieldset>
                {/* Status */}
                <fieldset>
                    <label htmlFor="status" className="form-section__label">Status</label>
                    <select id="status" name="status" onChange={handleChange} className="form-section__select">
                        <option value="all" className="form-section__option">All</option>
                        <option value="alive" className="form-section__option">Alive</option>
                        <option value="dead" className="form-section__option">Dead</option>
                        <option value="unknown" className="form-section__option">Unknown</option>
                    </select>
                </fieldset>
            </form>
        </section>
    );
};




export default Filters;    