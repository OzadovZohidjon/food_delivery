import * as React from "react"

function ClockIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            {...props}
        >
            <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 2v6.414l4.293 4.293 1.414-1.414L13 11.586V6h-2z" />
        </svg>
    )
}

export default ClockIcon
