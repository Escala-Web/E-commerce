import { useContext } from "react";
import { FavoriteContext } from "../../../../../context/Favorite";
import { Container, ContainerHeader } from "./styles";
import { Link } from "react-router-dom";

export const Favorit = ({title}) => {
	const { favorite } = useContext(FavoriteContext);

	return (
		<>

            <ContainerHeader>
                <h2>{title}</h2>
            </ContainerHeader>

			<Container>
				{favorite?.map((fav) => (
					<>
						<Link key={fav.id} className="container-favorid">
							<div className="favorid-image">
								<img src={fav.image} />
							</div>
							<div className="favorid-content">
								<p>{fav.title}</p>
								<b>R$ {fav.price}</b>
							</div>
						</Link>
					</>
				))}

                <Link className="link-ver-mais">Ver mais</Link>
			</Container>
		</>
	);
};
