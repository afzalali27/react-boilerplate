import styled from 'styled-components';
import {theme} from '../../../theme';

export const DropdownWrappper =  styled.div`
     position:relative;
     padding-bottom:25px;
     margin-bottom: 5px;
     width:${props=>props.fullWidth ? '100%' : '350px'};
     ${theme.mediaQueriesMaxWidth.sm}{
     width:${props=>props.fullWidth ? '100%' : '100%'};

     }

`;

export const DropdownWrap =  styled.div`
     margin-top: 15px;
     background-color:${theme.colors.lightgrey};
     padding :23px 30px 0px 30px;
`
