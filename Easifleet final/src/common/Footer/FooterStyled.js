import styled from 'styled-components';
import { theme } from '../../theme';

export const Box = styled.div`


	padding: 80px 60px;
	background: ${theme.colors.easiblue};
	.list-right {
		padding-right: 27px;
	}
	.up-style {
		margin-top:-10px;
		margin-left: auto;
	}
	.list-horizental {
		display:flex;
	}
${theme.mediaQueriesMaxWidth.sm} {
	.list-right {
		padding-right: 27px;
		margin-bottom:10px;
	}
	.display-hide {
		display:none;
	}
	.list-horizental {
		display:block;
	}
	.up-style{
		position: relative;
		margin-top:30px;
	}
	.list-unstyled {
		padding-left: 0;
	}
	
   }
`;

export const Hr = styled.div`
	border-top: 1px solid white;
	margin-top:80px;
	margin-bottom:80px;
	${theme.mediaQueriesMaxWidth.sm} {
		display:none;
	   }
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 0px;
font-size: 12px;
font-weight: 500;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.a`
font-size: 12px;
font-weight: 500;
color: #fff;
margin-bottom: 0px;
font-weight: bold;
`;
