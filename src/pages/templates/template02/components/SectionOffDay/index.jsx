import { Link } from "react-router-dom"
import { Category } from "../Category"
import { Container, ContainerCard, ContainerPositionCard } from "./styles"
import { CardOffDay } from "../CardOffDay"

export const SectionOffDay = () => {

    const data = [
        {
            'id': 1,
            'image': 'https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg',
            'title': 'TSmartphone Samsung Galaxy A06 128GB 4GB RAM Azul Escuro 6,7',
            'price':  4000.00
        },
        {
            'id': 2,
            'image': 'https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-s23-256gb-preto-5g-8gb-ram-61-cam-tripla-selfie-12mp/magazineluiza/232854100/e9fd12e9a66f2797bce34c5169369937.jpg',
            'title': 'Smartphone Samsung Galaxy S23 256GB Preto 5G 8GB RAM 6,1',
            'price':  2699.00
        },
        {
            'id': 3,
            'image': 'https://a-static.mlcdn.com.br/800x560/relogio-smart-digital-y8-original-masculino-e-feminino-tws/woofdistribuidora/relogio-y8/8dd89ddc0ec036b92665c2910e59cea0.jpeg',
            'title': 'Relógio Smart Digital Y8 Original Masculino',
            'price': 129.99
        },
        {
            'id': 4,
            'image': 'https://a-static.mlcdn.com.br/800x560/notebook-samsung-galaxy-book3-360-intel-core-i5-8gb-ram-ssd-256gb-133-full-hd-windows-11-np730qfg-kf2br/magazineluiza/238407100/de20070b65e20cf75fe60b9e8e3d4c9a.jpg',
            'title': 'Notebook Samsung Galaxy Book3 360 Intel Core i5 8GB RAM SSD 256GB',
            'price':  3869.10
        },
        {
            'id': 5,
            'image': 'https://a-static.mlcdn.com.br/800x560/relogio-masculino-technos-racer-prata-original-prova-d-agua-garantia-de-1-ano/buyclock/rt2115mxl/801ccac808b631c9c09b9e3edce2df1d.jpeg',
            'title': 'Relógio Masculino Technos Racer Prata Original',
            'price':  227.91
        },
        {
            'id': 6,
            'image': 'https://a-static.mlcdn.com.br/800x560/panela-frigideira-de-inducao-e-fogao-a-gas-antiaderente-de-ceramica-reforcada-linha-premium-hyllis-home-goods/homeimports/ds-11725/3d90dba222606dff1ef4b191d692aeb2.jpeg',
            'title': 'Panela Frigideira De Indução E Fogão A Gás Antiaderente',
            'price':  99.91
        }
    ]


    return (
        <>

            <Container>
                <Category title='Promoções do Dia' name='Ver mais' link='/'/>
                <ContainerCard>
                    <ContainerPositionCard direction='row'>
                        <CardOffDay data={data}/>
                    </ContainerPositionCard>
                    
                </ContainerCard>
            </Container>

        </>
    )
}