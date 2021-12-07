import { createGlobalStyle } from "styled-components";

import OpenSansRegularTff from "./OpenSansRegular.ttf";
import OpenSansLightTff from "./OpenSansLight.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('OpenSans'),
        url(${OpenSansLightTff}) format('truetype'),
        url(${OpenSansRegularTff}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
