import { ContainerCard } from "../../styles";

export const CardBanner = () => {
	return (
		<>
			<ContainerCard>
				<div className="card">
					<div className="card_content">
						<div className="card_content_container border">
							<div className="cart_title_type">
								<p>Banner Desktop</p>
							</div>
							<div className="conatiner_content">
								<div className="card_image">
									<img src="https://placehold.co/400x200/png" />
								</div>
								<div className="card_content_description">
									<p>Nome do banner</p>
									<p>Posição: 1</p>
								</div>
							</div>
						</div>

						<div className="card_content_container ">
							<div className="cart_title_type">
								<p>Banner Desktop</p>
							</div>
							<div className="conatiner_content">
								<div className="card_image">
									<img src="https://placehold.co/400x200/png" />
								</div>
								<div className="card_content_description">
									<p>Nome do banner</p>
									<p>Posição: 1</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ContainerCard>
		</>
	);
};
