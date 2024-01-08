import React from "react";

const Container = ({children}) => {
    return (
        <div className="container flex flex-col max-w-7xl m-auto">
            {children}
        </div>
    )
}

export default Container;