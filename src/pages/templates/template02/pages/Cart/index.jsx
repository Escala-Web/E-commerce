import { useContext } from "react";
import { Breadcrumb } from "../../components/Breadcrumbs";
import { HeaderPageTemplate02 } from "../../components/Header";
import { Container } from "../home/styles";
import { FavoriteContext } from "../../../../../context/Favorite";
import {
	CardProduct,
	ContainerCart,
	ContainerImage,
	ContainerSection,
	ContainerSteps,
	Steps,
} from "./styles";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaMoneyCheck, FaTruck, FaUser } from "react-icons/fa6";
import { FormatToReal } from "../../../../../helpers/FormatToReal";

export const CartTemplate02 = () => {
	const { favorite } = useContext(FavoriteContext);



	return (
		<>
			<HeaderPageTemplate02 />
			<Breadcrumb page="Carrinho" />
			<Container>
				<ContainerSection>
					<ContainerSteps>
						<div>
							<Steps>
								<IoBagHandleSharp color="#fff" size={28} />
							</Steps>
							<p>Sacola</p>
						</div>
					</ContainerSteps>

					<ContainerSteps>
						<div>
							<Steps>
								<FaUser color="#fff" size={28} />
							</Steps>
							<p>Identificação</p>
						</div>
					</ContainerSteps>

					<ContainerSteps>
						<div>
							<Steps>
								<FaTruck color="#fff" size={28} />
							</Steps>
							<p>Entrega</p>
						</div>
					</ContainerSteps>

					<ContainerSteps>
						<div>
							<Steps>
								<FaMoneyCheck color="#fff" size={28} />
							</Steps>
							<p>Pagamento</p>
						</div>
					</ContainerSteps>
				</ContainerSection>

				<ContainerCart>
					<CardProduct>
						{(favorite || []).map((fav) => (
							<div>
								<ContainerImage>
									<img src={fav.image} />
								</ContainerImage>
								<div>
									<p>{fav.title}</p>
								</div>

                                <div>
									<h4>{FormatToReal(fav.price)}</h4>
								</div>
							</div>
						))}
					</CardProduct>
					<div>
						Resumo
					</div>
				</ContainerCart>
			</Container>
		</>
	);
};
