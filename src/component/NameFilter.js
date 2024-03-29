import React from 'react';

const NameFilter = ({  onChange = () => {}}) => (
    <div className="name-filter">
        <input className="name-filter-text" type="text"   onChange={(event) => {
                onChange(event.target.value)
            }}/>
        <input className="name-filter-button" type="button" value="Search" />
      </div>
)

export default NameFilter