

export const MockLogo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
    >
        <rect width="40" height="40" fill="#fff" rx="10"></rect>
        <rect width="40" height="40" fill="url(#pattern0_2176_29)" rx="10"></rect>
        <defs>
            <pattern
                id="pattern0_2176_29"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
            >
                <use
                    xlinkHref="#image0_2176_29"
                    transform="matrix(.02538 0 0 .02538 .096 .108)"
                ></use>
            </pattern>
            <image
                xlinkHref="data:image/png;base64,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"
                id="image0_2176_29"
                width="111"
                height="30"
            ></image>
        </defs>
    </svg>
);

