import React, { createContext, useState } from "react";


export const IntervalCtx = React.createContext();


const IntervalContext = props => {
    const [interval, setInterval] = useState();
    const [isActive, setActive] = useState(true);
    return (
        <>
            <IntervalCtx.Provider
                value={[interval, setInterval, isActive, setActive]}
            >
                {props.children}
            </IntervalCtx.Provider>
        </>
    );
};

export default IntervalContext;
