import React, { useState } from "react";

const App = () => {
  const [para, setPara] = useState(null);

  function togglePara(id) {
    setPara((p) => (p === id ? null : id));
  }

  return (
    <div>
      <button onClick={() => togglePara(1)} style={{ cursor: "pointer" }}>
        View para1
      </button>
      {para === 1 && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo numquam
          sapiente quisquam repellendus nesciunt suscipit dolore. Sequi adipisci
          explicabo odio in dignissimos aspernatur deserunt. Nam nobis officiis
          temporibus distinctio quasi.
        </p>
      )}
      <br />
      <br />
      <button onClick={() => togglePara(2)} style={{ cursor: "pointer" }}>
        View para2
      </button>
      {para === 2 && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo numquam
          sapiente quisquam repellendus nesciunt suscipit dolore. Sequi adipisci
          explicabo odio in dignissimos aspernatur deserunt. Nam nobis officiis
          temporibus distinctio quasi.
        </p>
      )}{" "}
      <br />
      <br />
      <button onClick={() => togglePara(3)} style={{ cursor: "pointer" }}>
        View para3
      </button>
      {para === 3 && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo numquam
          sapiente quisquam repellendus nesciunt suscipit dolore. Sequi adipisci
          explicabo odio in dignissimos aspernatur deserunt. Nam nobis officiis
          temporibus distinctio quasi.
        </p>
      )}
    </div>
  );
};

export default App;