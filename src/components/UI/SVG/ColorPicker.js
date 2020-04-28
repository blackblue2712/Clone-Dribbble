import React from 'react';

export default function () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" role="img">
            <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                <circle cx="10" cy="10.5" r="10" fill="#C4C4C4"></circle>
            </mask>
            <g mask="url(#mask0)">
                <rect x="10" y="0.5" width="10" height="20" fill="#3A8BBB"></rect>
                <path d="M20 4.5L10 -2.5V10.5L20 4.5Z" fill="#00B6E3"></path>
                <path d="M20 16.5L10 24.5V10.5L20 16.5Z" fill="#C142A0"></path>
                <path d="M0 0.5H10V10.5L0 16.5V0.5Z" fill="#FCC870"></path>
                <path d="M-7 0.5H10V10.5L-7 0.5Z" fill="#EF875B"></path>
                <path d="M0 16.5L10 24.5V10.5L0 16.5Z" fill="#FF5555"></path>
            </g>
            <circle cx="10" cy="10.5" r="3" fill="#F5F6F7"></circle>
        </svg>
    )
}