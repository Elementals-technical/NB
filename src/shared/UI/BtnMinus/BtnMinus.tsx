import React from "react";

interface BtnMinusI {
    onClick: () => void

}

export const BtnMinus: React.FC<BtnMinusI> = (props) => {
    const { onClick } = props;

    return (
        <div
            className="cursor-pointer"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M25.6668 13.9999C25.6668 17.0941 24.4377 20.0616 22.2497 22.2495C20.0618 24.4374 17.0944 25.6666 14.0002 25.6666C10.906 25.6666 7.93851 24.4374 5.75058 22.2495C3.56266 20.0616 2.3335 17.0941 2.3335 13.9999C2.3335 10.9057 3.56266 7.93826 5.75058 5.75034C7.93851 3.56242 10.906 2.33325 14.0002 2.33325C17.0944 2.33325 20.0618 3.56242 22.2497 5.75034C24.4377 7.93826 25.6668 10.9057 25.6668 13.9999ZM8.896 13.2708C8.70261 13.2708 8.51714 13.3476 8.3804 13.4843C8.24365 13.6211 8.16683 13.8065 8.16683 13.9999C8.16683 14.1933 8.24365 14.3788 8.3804 14.5155C8.51714 14.6523 8.70261 14.7291 8.896 14.7291H19.1043C19.2977 14.7291 19.4832 14.6523 19.6199 14.5155C19.7567 14.3788 19.8335 14.1933 19.8335 13.9999C19.8335 13.8065 19.7567 13.6211 19.6199 13.4843C19.4832 13.3476 19.2977 13.2708 19.1043 13.2708H8.896Z" fill="#495057" />
            </svg>
        </div>
    )

}