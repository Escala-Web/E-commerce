import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export const ContainerDesktop = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
`;

export const ContainerHeader = styled.div`
	background-color: #1b6392;

	padding: 1rem 2rem;

	display: flex;
	align-items: center;

	justify-content: space-between;
`;

export const Navegacao = styled.nav`
	/* background-color: aqua; */

    @media (max-width: 768px) {
            flex-direction: column;
            height: 100%;
        }

	ul {
		display: flex;
		gap: 2rem;
		align-items: center;
		list-style: none;

        

        @media (max-width: 768px) {
            flex-direction: column;
            height: 100%;
            /* justify-content: center; */

            margin-top: 2rem;

            gap: .6rem;

            li {
                width: 78%;
                padding: .5rem 2rem;

                border: 1px solid #cccccc4f;

                border-radius: 6px;
            }
        }
	}

    @media (max-width: 768px) {
		div {
            background-color: #1b6392;
            height: 100px;
            padding: 1rem;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
	}
`;

export const LinkNavigation = styled(Link)`
	color: ${theme.colors.black["600"]};

	font-size: 1rem;
	font-weight: 600;

	text-decoration: none;

	position: relative;

	&::before {
		width: 0%;
		height: 2px;
		background-color: ${theme.colors.black["500"]};
		content: "";
		position: absolute;
		left: 0;
		bottom: -8px;
		transition: 0.2s;
	}

	&:hover::before {
		content: "";
		width: 100%;
	}
`;

export const LinkNavigationLogin = styled(Link)`
	display: flex;
	align-items: center;
	gap: 0.6rem;

	padding: 0.6rem 1rem;

	background-color: ${({bg}) => bg || theme.colors.white["100"]};
	color: #1b6392;

	text-decoration: none;

	font-weight: 500;

	border-radius: 4px;

    @media (max-width: 768px) {
		 
        /* width: 0; */
        display: flex;
        align-items: center;
        justify-content: center;
        
	}

    
`;

export const ContainerSearch = styled.div`
	background-color: ${theme.colors.white["300"]};
	padding: 0.6rem 2rem;

	color: #fff;

	display: flex;
	align-items: center;

	gap: 4rem;

	p {
		color: ${theme.colors.black["600"]};
		font-weight: 600;
	}

	input {
	}
`;

export const ContainerSearchStyle = styled.div`
	width: ${({ w }) => w};
	position: relative;
`;

export const SearchIcon = styled.div`
	position: absolute;
	right: 50px;
	bottom: 7px;
	color: ${theme.colors.black["700"]};
`;

export const ContainerSearchResults = styled.div`
	position: absolute;
	top: 40px;
	width: 100%;
	left: 0;
	background-color: ${theme.colors.white["100"]};

	border: 1px solid #ccc;

	border-radius: 4px;

	max-height: 70vh;

	overflow: hidden;
	z-index: 999;

	p {
		padding: 0.4rem 1rem;
		cursor: pointer;

		&:hover {
			background-color: ${theme.colors.gray["200"]};
		}
	}
`;

export const ContainerMobile = styled.div`
	@media (min-width: 768px) {
		display: none;
	}

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    /* justify-content: space-between; */
`;

export const ContainerHeaderMobile = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    box-sizing: border-box;

    padding: 1rem 2rem;

    width: 100%;
    background-color:  #1b6392;

    position: relative;

`;

export const HeaderSearchMobile = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: aquamarine; */
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;

    background-color: ${theme.colors.white["300"]};

    font-weight: 500;
        @media (max-width: 450px) {
            justify-content: center;
        }

    p {
        color: ${theme.colors.black['500']};
        font-weight: 500;
        
    }


`;

export const ContainerHeaderOpenMbStyle = styled.div`

    position: absolute;
    top: 84px;
    left: -2px;

    background-color: ${theme.colors.white['200']};

    width: 80%;
    height: 97vh;

    overflow: hidden;
    overflow-y: hidden;

    z-index: 9999;

    border-radius: 4px;

    border: 1px solid #ccc;

`;