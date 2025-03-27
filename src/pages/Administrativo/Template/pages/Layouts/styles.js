import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    width: 100%;

    flex-direction: column;

    background-color: #fff;

    .title {
        width: 100%;
        padding: 1rem 1.2rem;

        border-bottom: 1px solid #e0e0e0;
    }

	.container {
		
		padding: 1rem;

		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: start;

        width: 100%;
	}

	.content {
		display: flex;
		background-color: aqua;
	}
`;

export const ContainerLayouts = styled.div`
	background-color: #fff;
	/* padding: 1rem; */
`;
