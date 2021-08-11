import * as React from "react"

function MoneyIcon(props) {
    return (
        <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M26 22H0V6h26v16zM2 20h22V8H2v12z" fill="#2A760F" />
            <path
                d="M32 28H6v-4.027h2V26h22V14h-2.013v-2H32v16zM13 18c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm-9-2h2v2H4v-2zm0 6h2v2H4v-2zm16-6h2v2h-2v-2z"
                fill="#2A760F"
            />
            <path d="M20 16h2v2h-2v-2z" fill="#2A760F" />
        </svg>
    )
}

export default MoneyIcon
