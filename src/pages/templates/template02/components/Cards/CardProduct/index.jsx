import { Link } from "react-router-dom";
import { Container } from "./styles";
import { formatPrice } from "../../../../../../utils/formatPrice";
import { useState } from "react";
import { urlSite } from "../../../../../../config/https";

export const CardProduct = ({ data }) => {

console.log(data)
	return (
		<>
			<Container>
				{data?.flatMap((product) => {

					return (
						<>
                        {product.variations.map((variation) => (
                            <Link key={product.id_product} to={`/produto/${product.id_product}`} className="container_card">
							<div className="card_media">
								<img
									src={`${urlSite}${variation.image_path}`}
									alt="Image"
								/>
							</div>
							<div className="card_content">
								<p className="card_frete_gratis">Frete Gratís</p>
								<p className="card_description">
									{product.name}
								</p>
								<div className="card_price">
									<p className="price card_price_discount">De: {formatPrice(variation.discount)}</p>
									<p className="price card_price_normal">Por: {formatPrice(variation.price)}</p>
								</div>
							</div>
						</Link>
                        ))}
                        </>
					);
				})}
			</Container>
		</>
	);
};
