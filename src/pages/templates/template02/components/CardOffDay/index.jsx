import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LinkButton } from "../LinkButton";
import { CardBody, CardHeart, CardImage, Container } from "./styles";
import { useContext, useState } from "react";
import { ThemeColorContext } from "../../../../../context/ThemeContext";
import { FavoriteContext } from "../../../../../context/Favorite";

export const CardOffDay = ({ data }) => {
	const { theme } = useContext(ThemeColorContext);
	const { favorite, toggleFavorite } = useContext(FavoriteContext);
	const [favorid, setFavorid] = useState(false);

	function handleClick(item) {
		setFavorid((prevFav) => !prevFav);

		toggleFavorite(item);
	}

    if (!Array.isArray(data) || data.length === 0) {
		return <p>Não há itens disponíveis.</p>;
	}
	return (
		<>
			{data.map((d) => (
				<Container key={d.id}>
					<CardImage>
						<img src={d.image} alt={d.title} />
					</CardImage>
					<CardBody>
						<div>
							<p>{d.title}</p>
							<h4>R$ {d.price}</h4>
						</div>
						<LinkButton>Comprar</LinkButton>
					</CardBody>

					<CardHeart onClick={() => handleClick(d)}>
						{favorite.some(f => f.id === d.id) ? (
							<FaHeart color={theme.colors.secondary} />
						) : (
							<FaRegHeart color={theme.colors.secondary} />
						)}
					</CardHeart>
				</Container>
			))}
		</>
	);
};