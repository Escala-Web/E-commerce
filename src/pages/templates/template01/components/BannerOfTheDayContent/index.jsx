import { Link } from "react-router-dom";
import { Container, ContainerFooter, ContainerRelogio, ContainerSubTitle, LinkStyle } from "./styles";
import { useEffect, useState } from "react";

export const BannerOfTheDayContent = () => {

    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
          setHora(new Date());
        }, 1000);
    
        return () => clearInterval(intervalo);
      }, []);
    
      const horaFormatada = hora.toLocaleTimeString().split(':');


	return (
		<>
			<Container>
				<ContainerSubTitle>
					<h2>Texto do Produto</h2>

					<h1>R$ 580.00</h1>
				</ContainerSubTitle>

				<div>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>

				<ContainerFooter>
					<ContainerRelogio>
                        <span>{horaFormatada[0]}</span>
                        <span>{horaFormatada[1]}</span>
                        <span>{horaFormatada[2]}</span>
                    </ContainerRelogio>
					<LinkStyle>Confira</LinkStyle>
				</ContainerFooter>
			</Container>
		</>
	);
};
