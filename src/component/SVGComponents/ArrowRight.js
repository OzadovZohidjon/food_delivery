import * as React from "react"

function ArrowRight(props) {
    return (
        <svg
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            aria-label="chevron right"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="prefix__bi-chevron-right prefix__b-icon prefix__bi"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
            />
        </svg>
    )
}

export default ArrowRight
