import styled from "styled-components";

export const ContainerImage = styled.div`
	img {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		border: 1px solid #ccc;
		/* box-shadow: 0 10px 10px #000; */

        object-fit: cover;

		@media (max-width: 999px) {
			width: 100%;
			height: 400px;
		}

		@media (max-width: 589px) {
			width: 100%;
			height: 400px;
		}
	}
`;
