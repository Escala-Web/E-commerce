import { Link, useNavigate } from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { ContainerPage, ContainerPageSectionBody } from "../components/Section";
import { ButtonTemplate } from "../Template/components/Button";
import { HeaderTemplateEditor } from "../Template/components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContainerAction, ContainerActionDelete, ContainerActionEdit, StyledTable, StyledTd, StyledTh, StyledTr } from "../Category/styles";
import { MdEditSquare } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Container } from "../Seo/styles";
import { HeaderBar } from "../components/HeaderBar";

function createDataTable(id, name, price, status) {

	return { id, name, price, status }

}

const rows = [
	createDataTable(1, 'Smartphone', 869.99, 'ativo'),
	createDataTable(2, 'Televisores', 1.52900, 'ativo'),
	createDataTable(3, 'Garrafas', 8.99, 'desativado'),
	createDataTable(4, 'Monitor', 653.99, 'ativo'),
]

export const Products = () => {

	
	return (

		<>
			<Breadcrumb page='Meus Produtos'/>
			<Container style={{flexDirection: 'column'}}>

		

				<TableContainer className="container" component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>#ID</TableCell>
								<TableCell>Nome</TableCell>
								<TableCell>Preço</TableCell>
								<TableCell>Status</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows?.map((row) => (
								<TableRow key={row.id}>
									<TableCell>{row.id}</TableCell>
									<TableCell>{row.name}</TableCell>
									<TableCell>{row.price}</TableCell>
									<TableCell>{row.status}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</>
	);		

};
