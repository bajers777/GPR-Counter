import React, { createContext, useState } from "react";


export const IntervalCtx = React.createContext();


const IntervalContext = props => {
    const [interval, setInterval] = useState();
    return (
        <>
            <IntervalCtx.Provider
                value={[interval, setInterval]}
            >
                {props.children}
            </IntervalCtx.Provider>
        </>
    );
};

export default IntervalContext;
