import React from "react";

const TButton = React.forwardRef(({ className = "", ...rest }, ref) => {
    const baseStyle = "outline-none border-none box-border bg-white py-2 px-4  rounded-full shadow m-2 leading-[20px]";
    const finalClassName = `${baseStyle} ${className}`;

    return (
        <button
            ref={ref}
            className={`mx-auto ${finalClassName} `}
            style={{ width: "300px", height: "34px" }}
            {...rest}
        />
    );
});

export default TButton;