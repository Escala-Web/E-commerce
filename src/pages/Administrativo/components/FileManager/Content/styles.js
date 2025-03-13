import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 4rem;
	position: relative;

	box-sizing: border-box;

	flex-wrap: wrap;

	justify-content: space-between;

	min-height: 78vh;

	

	.card {
		display: flex;
		align-items: center;
		flex-direction: column;
	}


	.container_add_file {

		border-width: .1rem;
		border-style: dashed;
		border-color: #50aff5;		

		stroke-dasharray: 20 5;

		width: 100%;
		height: 80px;
		box-sizing: border-box;
		border-radius: 10px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container_add_folder {
		background-color: #fff;
		position: absolute; 
		z-index: 9999999999999999999999999999;
		top: 50%; 
		left: 50%; 
		transform: translate(
			-50%,
			-50%
		);
		height: 40vh;
		width: 700px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 12px;
	}

	.container_add_folders {
		width: 100%;
	}
`;

export const SideBar = styled.div`

	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
`;
