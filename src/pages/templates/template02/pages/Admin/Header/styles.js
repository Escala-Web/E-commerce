import styled from "styled-components";

export const ContainerContent = styled.div`
	display: flex;

	gap: 1rem;

	.header-sidebar {
		box-shadow: 0 0 2px ${({ theme }) => theme.colors.text_primary};
		width: 16rem;
		background-color: ${({ theme }) => theme.colors.secondary};

		height: 80vh;
		padding: 1rem;

	}

	.avatar {
		display: flex;
		align-items: center;

		gap: 0.6rem;
		color: ${({ theme }) => theme.colors.text_secondary};
		opacity: 0.9;
	}

	.icon-avatar {
		font-size: 1.9rem;
	}

	.container-header {
		display: flex;
		margin-top: 4rem;
	}

	.header-list {
		list-style: none;
		width: 100%;
	}

	.icons-header > svg {
		font-size: 1.5rem;
	}

	.links-menu {
		display: flex;
		align-items: center;
		gap: 0.6rem;

		padding: 0.6rem;
		width: 100%;

		text-decoration: none;

		color: ${({ theme }) => theme.colors.text_secondary};

		font-weight: 400;

		&:hover {
			background-color: ${({ theme }) => theme.colors.accent};
			color: ${({ theme }) => theme.colors.secondary};
		}
	}

	.link-menu-active {
        display: flex;
		align-items: center;
		gap: 0.6rem;

		padding: 0.6rem;
		width: 100%;

		text-decoration: none;

	

		font-weight: 400;
		background-color: ${({ theme }) => theme.colors.accent};
		color: ${({ theme }) => theme.colors.secondary};
	}
`;
