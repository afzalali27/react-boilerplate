import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

export default createGlobalStyle`
        
    body{
        padding: 0;
        margin: 0;
        font-family: ${theme.fonts.Replica_Regular};
    }  
`;
