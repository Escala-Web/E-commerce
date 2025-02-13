import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: start;

	gap: 1rem;
	position: relative;

	.button-modal {
		background-color: rgb(60, 148, 243);
		padding: 0.8rem 2rem;
		cursor: pointer;
		color: #fff;
		border-radius: 6px;
	}
`;

export const ContainerManager = styled.div`
	position: absolute;

	top: 50%;
	left: 50%;
	height: 100vh;
	transform: translate(-50%, -50%);
	width: 100%;
	background-color: rgba(51, 51, 51, 0.61);

	display: flex;
	align-items: center;
	justify-content: center;
	/* border-radius: 12px; */

	z-index: 9999999;

	.content-main {
		z-index: 99999999999999;
		width: 80%;
		height: 86vh;
		position: absolute;

		background-color: #fff;
		border-radius: 12px;
		overflow: hidden;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 1rem;
	}

	h4 {
		font-size: 1.4rem;
		color: #555;
	}

	.close_window {
		cursor: pointer;
	}
`;

export const ContainerContent = styled.div`
	display: flex;
	align-items: start;
	gap: 1rem;

	padding: 0rem 1rem 1rem;
	height: 100%;

	.side-bar {
		width: 14%;
		height: 100%;
		padding: 1rem 0;

		h3 {
			color: #555;
			font-weight: 500;
			border-bottom: 1px solid #f2f2f2;
			padding-bottom: 0.6rem;
		}

		.header-navegacao {
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 0.2rem;
			margin-top: 1rem;
			margin-left: 0.8rem;
		}

		.pastas-title {
			margin-top: 2rem;
		}

		.header-navegacao > li {
			gap: 1rem;
			display: flex;

			/* background-color: antiquewhite; */
			padding: 0.6rem 0.4rem;

			cursor: pointer;

			&:hover {
				background-color: #f2f2f2;
			}
		}
	}
`;

export const ContentFiles = styled.div`
	border-left: 2px solid #f2f2f2;
	height: 90%;
	padding: 0;
	margin: 0;

    padding: 1rem 2rem;

    width: 100%;

    display: flex;
    flex-direction: column;

    .header-content {
        display: flex;
        align-items: center;

    }

    .content-header {
        /* background-color: antiquewhite; */
        width: 100%;
    }

    .content-filter {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .dirname-icon {
        cursor: pointer;

        font-size: 1.4rem;
        transition: .2s;
        &:hover {
            font-size: 1.42rem;
        }

    }

    .card-add-upload {
        background-color: #ccc;

        width: 150px;
        height: 140px;
        border-radius: 12px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 30px;

        border: 4px dotted #fff;

        cursor: pointer;
    }

    .card-add-folder {
        /* background-color: #f2f2f2; */
        border-radius: 12px;

        width: 150px;
        height: 140px;
        border-radius: 12px;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;

        margin-top: 30px;
        cursor: pointer;

        &:hover {
            background-color: #f2f2f2;
        }
    }

    .add-folder-icon {
        font-size: 5.4rem;
        color: #555;
    }

    .add-upload-icon {
        font-size: 1.6rem;
        color: #fff;
    }

`;


export const CardDir = styled.div`

    display: flex;
    align-items: center;
    gap: 3rem;

    flex-wrap: wrap;

`;