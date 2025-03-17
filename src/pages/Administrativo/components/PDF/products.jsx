import React from "react";
import { Container, Fotter, Header } from "./styles";
import { useProducts } from "../../../../hooks/Products/useProducts";
import { urlSite } from "../../../../config/https";
import { formatPrice } from "../../../../utils/formatPrice";
import logo from '../../../../assets/logo/logo-nova.png';

export const ProductPDF = ({ data }) => {
	const dataAtual = new Date().toLocaleDateString("pt-BR");


	return (

			<Container
				id="pdf-content"
				style={{ margin: "20px", padding: "20px", border: "1px solid #ddd" }}
			>
				<div>
                <Header>
					<div className="header_top">
						<h4>Escala Company Informática LTDA</h4>
						<img
							src={logo}
							alt="Logo"
						/>
					</div>
					<div className="header_content">
						<p>
							Sites e lojas virtuais - sistemas web - arte final - catálogos -
							cartões de visita - soluções complatas
						</p>
					</div>
					<div className="header_botton">
						<p>{dataAtual}</p>
					</div>
				</Header>

				<h2
					style={{
						textAlign: "start",
						color: "#1e1e1e",
						marginBottom: ".6rem",
						opacity: ".8",
					}}
				>
					Lista de meus Produtos
				</h2>
				<table style={{ width: "100%", borderCollapse: "collapse" }}>
					<thead>
						<tr>
							<th
								style={{
									border: "1px solid #ddd",
									padding: "8px 8px",
									textAlign: "start",
									fontSize: "16px",
								}}
							>
								Codido
							</th>
						
							<th
								style={{
									border: "1px solid #ddd",
									padding: "8px 8px",
									textAlign: "start",
									fontSize: "16px",
								}}
							>
								Produto
							</th>
							<th
								style={{
									border: "1px solid #ddd",
									padding: "8px 8px",
									textAlign: "start",
									fontSize: "16px",
								}}
							>
								Marca
							</th>
							<th
								style={{
									border: "1px solid #ddd",
									padding: "8px 8px",
									textAlign: "start",
									fontSize: "16px",
								}}
							>
								Valor
							</th>
							<th
								style={{
									border: "1px solid #ddd",
									padding: "8px 8px",
									textAlign: "start",
									fontSize: "16px",
								}}
							>
								Estoque
							</th>
						</tr>
					</thead>
					<tbody>
						{data?.flatMap((product) =>
							product?.variations?.map((v) => (
								<tr key={"u"}>
									<td
										style={{
											border: "1px solid #ddd",
											padding: " 6px 8px",
											textAlign: "start",
										}}
									>
										{v.sku || "Não encontrado"}
									</td>
									
									<td
										style={{
											border: "1px solid #ddd",
											padding: " 6px 8px",
											textAlign: "start",
										}}
									>
										{product.name || "Não encontrado"}
									</td>
									<td
										style={{
											border: "1px solid #ddd",
											padding: " 6px 8px",
											textAlign: "start",
										}}
									>
										{product.branch || "Não encontrado"}
									</td>
									<td
										style={{
											border: "1px solid #ddd",
											padding: " 6px 8px",
											textAlign: "start",
										}}
									>
										{formatPrice(v.price)|| "Não encontrado"}
									</td>
									<td
										style={{
											border: "1px solid #ddd",
											padding: " 6px 8px",
											textAlign: "start",
										}}
									>
										{v.qtd_stock || "Não encontrado"}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
                </div>
				<Fotter>
					<p>
						Rua Benjamin Constant, 796 - Centro Suzano - SP - CEP. 08674-011
					</p>

					<p>
						www.escalaweb.com.br - escalaweb@escalaweb.com.br - (11) 4975-1182 |
						(11) 94017-5075
					</p>
				</Fotter>
			</Container>
	
	);
};
