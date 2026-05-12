import React, { useState } from 'react'
import "./Count.css"

const Count = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="count-container">
            <button
                className="btn primary"
                onClick={decrement}
                disabled={count === 0}
            >
                -
            </button>

            <p>Selección: {count}</p>

            <button className="btn primary" onClick={increment}>+</button>

        </div>
    )
}

export default Count
