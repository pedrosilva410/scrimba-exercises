import React, { useState } from "react";
import "./styles.css";

const PassengerCounter = () => {

    const [count, setCount] = useState(0);

    return (
        <main>
        <h1>Passenger Counter</h1>
        <p>people count: {count} </p>

        <button onClick={() => setCount(count + 1)}>entered</button>  
        <button onClick={() => setCount(count - 1)}>left</button>
        </main>
    );
};

export default PassengerCounter;
