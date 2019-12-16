import React, { useState } from "react";

const App = () => {
  const [inputData, setInputData] = useState("");

  const sendMessage = async msg => {
    const body = JSON.stringify({ msg });

    const data = await fetch(
      "https://us-central1-skill-wallet-mock.cloudfunctions.net/recruitment/test",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body
      }
    );

    if (data.ok) {
      const message = await data.text();
      console.log(message);
    }
  };

  const onClickHandler = async () => {
    await sendMessage(inputData);

    setInputData("");
  };

  return (
    <div className="App">
      <h1>{inputData}</h1>
      <input
        type="text"
        value={inputData}
        onChange={e => setInputData(e.target.value)}
      />

      <button onClick={onClickHandler}>Send</button>
    </div>
  );
};

export default App;
