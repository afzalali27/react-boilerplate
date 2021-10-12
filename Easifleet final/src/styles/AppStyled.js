import styled from 'styled-components';
import {theme} from '../theme';

export const AppWrapper = styled.div`
        position:relative;
        transition: all 0.6s ease;
        left: 0px;
        ${ props => !props.menuCollapse && `
        
            left:-300px;
            transition: all 0.6s ease;
        `}
        ${theme.mediaQueriesMaxWidth.sm} {
            ${ props => !props.menuCollapse && `
        
                left:-100%;
                transition: all 0.6s ease;
            `}

        }

`