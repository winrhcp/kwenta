import styled from 'styled-components';

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`;

export const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: -1;
`;

export const Line1 = styled.p`
	color: ${(props) => props.theme.colors.white};
	font-size: 16px;
	margin-top: 35%;
	text-transform: uppercase;
`;

export const Line2 = styled.div`
	background-image: ${(props) => props.theme.colors.gold};
	background-size: 100%;
	font-size: 48px;
	font-weight: 700;
	line-height: 1.2;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const Line3 = styled.p`
	color: ${(props) => props.theme.colors.white};
	font-size: 20px;
	font-weight: 700;
	line-height: 1.3;
`;

export const Line4 = styled.p`
	color: ${(props) => props.theme.colors.silver};
	font-size: 14px;
	line-height: 1.3;
	max-width: 80%;
	margin: 0 auto 36px;
	text-align: center;
`;

export const Line4Strong = styled.strong`
	color: ${(props) => props.theme.colors.white};
`;

export const Line5 = styled.p`
	color: ${(props) => props.theme.colors.silver};
	font-size: 14px;
	line-height: 1.3;
	max-width: 80%;
	margin: 24px auto 8px;
	text-align: center;
`;

export const Line6 = styled.p`
	color: ${(props) => props.theme.colors.silver};
	font-size: 14px;
	line-height: 1.3;
	max-width: 80%;
	margin: 0 auto;
	text-align: center;
`;

export const Link = styled.a`
	text-decoration: underline;
`;

export const Logo = styled.div`
	align-self: flex-start;
	margin-top: 36px;
	margin-left: 60px;
`;
