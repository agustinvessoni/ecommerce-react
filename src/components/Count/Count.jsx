import React, { useState } from 'react'
import "./Count.css"

const Count = ({ initial = 1, onAdd, max = 10 }) => {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < max) {
            const nextCount = count + 1;
            setCount(nextCount);
            onAdd(nextCount);
        }
    };

    const decrement = () => {
        if (count > 1) {
            const nextCount = count - 1;
            setCount(nextCount);
            onAdd(nextCount);
        }
    };

    return (
        <div className="count-container">
            <button
                className="btn primary"
                onClick={decrement}
                disabled={count === 1}
            >
                -
            </button>

            <button
                className="btn primary"
                onClick={increment}
                disabled={count === max}
            >
                +
            </button>

            <p>Cantidad: {count}</p>
        </div>
    )
}

export default Count