import * as React from "react"

function CallIcon(props) {
    return (
        <svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9.36 20.168l-5.857 5.075c-.675.585-.672 1.657.009 2.337l4.18 4.173c1.244 1.242 3.09 1.597 4.571.879a43.81 43.81 0 0020.37-20.342c.718-1.479.363-3.324-.88-4.566l-4.22-4.212c-.683-.682-1.761-.684-2.346-.003L20.14 9.39c-.529.615-.46 1.57.159 2.187l2.049 2.046a.693.693 0 01.132.83 21.834 21.834 0 01-8.051 8.04.694.694 0 01-.831-.132l-2.042-2.04c-.62-.618-1.58-.686-2.197-.152h.002z"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CallIcon
