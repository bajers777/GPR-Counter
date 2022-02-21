import React, { createContext, useState } from "react";


export const IntervalCtx = React.createContext();


const IntervalContext = props => {
    const [interval, setInterval] = useState();
    const [isActiveInterval, setActiveInterval] = useState(true);
    return (
        <>
            <IntervalCtx.Provider
                value={[interval, setInterval, isActiveInterval, setActiveInterval]}
            >
                {props.children}
            </IntervalCtx.Provider>
        </>
    );
};

export default IntervalContext;
