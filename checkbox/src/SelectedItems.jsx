import React from 'react'

const SelectedItems = ({items}) => {
  return (
    <div>
        <h3>Selected Items:</h3>
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  );
};

export default SelectedItems;