import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Title } from "../../../../../../components/Title";
import { useApi } from "../../../../../../hooks/useApi";
import { ContainerStyle } from "../../../pages/Header/styles";
import {
	CardBodyStyle,
	CardEditColorStyle,
	CardEditStyle,
	ContainerCardListStyle,
} from "./styles";

export const ListarMenu = () => {
	const { items, loading, error } = useApi("/menu");

	console.log(items);

	return (
		<>
			<ContainerStyle>
				<Title textAlign="center">Menus</Title>
				<ContainerCardListStyle>
					{items.map((item) => (
						<CardBodyStyle>
							<p>{item.name}</p>
							<CardEditStyle>
								<CardEditColorStyle color="blue">
									<FaEdit />
								</CardEditColorStyle>
								<CardEditColorStyle color="red">
									<FaTrashAlt />
								</CardEditColorStyle>
							</CardEditStyle>
						</CardBodyStyle>
					))}
				</ContainerCardListStyle>
			</ContainerStyle>
		</>
	);
};
