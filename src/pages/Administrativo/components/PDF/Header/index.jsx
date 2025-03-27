import { Header } from "../styles";
import logo from "../../../../../assets/logo/logo-nova.png";

export const HeaderPDF = () => {
	return (
		<>
			<Header>
				<div className="header_top">
					<h4>Escala Company Informática LTDA</h4>
					<img src={logo} alt="Logo" />
				</div>
				<div className="header_content">
					<p>
						Sites e lojas virtuais - sistemas web - arte final - catálogos -
						cartões de visita - soluções complatas
					</p>
				</div>
				<div className="header_botton">
				
				</div>
			</Header>
		</>
	);
};
