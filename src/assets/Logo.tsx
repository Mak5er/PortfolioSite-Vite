import React from 'react';
import {useTheme} from '@mui/material/styles';

interface SvgIconProps {
    width?: string | number;
    height?: string | number;
}

const Logo: React.FC<SvgIconProps> = ({width, height}) => {
    const theme = useTheme();

    return (
        <svg fill={theme.palette.primary.main}
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"
             width={width}
             height={height}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6.414 15.707 5 14.293 7.293 12 5 9.707l1.414-1.414L10.121 12l-3.707 3.707zM19 16h-7v-2h7v2z"></path>
            </g>
        </svg>
    );
};

export default Logo;