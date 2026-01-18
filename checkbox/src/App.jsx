import React, { useState } from 'react'
import SelectedItems from './SelectedItems';

const options = ["Python", "DSA", "JAVA", "C++", "Web Development"];

const App = () => {

  const [showOptions, setShowOptions] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    if(selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setShowOptions(!showOptions)}>Select Option</button>
      </div>

      {showOptions && (
        <div style={{marginTop: 10}}>
          {options.map(item => (
            <div key={item}>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => toggleItem(item)}
              />
              <label style={{marginLeft: 8}}>{item}</label>
            </div>
          ))}
        </div>
      )}

      <SelectedItems items={selectedItems}/>

    </div>
  )
}

export default App