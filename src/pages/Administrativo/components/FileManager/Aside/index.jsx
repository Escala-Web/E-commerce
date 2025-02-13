import { Container } from "./styles";



export const HeaderAside = ({dataFolder}) => {
	return (
		<Container >
			<h3>Gerenciador</h3>
			<ul className="header-navegacao">
				<li>Adicionar Uploads</li>
				<li>Lixeira</li>
			</ul>

			<h3 className="pastas-title">Minhas pastas</h3>
			<ul className="header-navegacao">
				{(dataFolder || []).map((data) => (
					<li>{data.folder}</li>
				))}
			</ul>
		</Container>
	);
};
