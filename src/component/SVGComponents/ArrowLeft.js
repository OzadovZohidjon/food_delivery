import * as React from "react"

function ArrowLeft(props) {
    return (
        <svg
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            aria-label="chevron left"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="prefix__bi-chevron-left prefix__b-icon prefix__bi"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
            />
        </svg>
    )
}

export default ArrowLeft
