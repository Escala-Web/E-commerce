import { useState } from "react";
import { Container, ContainerBannerImage, ContainerBox, ContainerBoxSelect } from "./styles";

export const BannerOfTheDay = () => {
    const imagesArray = [
        {
            id: 1,
            image: 'https://ageubrindes.com.br/image/cache/catalog/Mochilas%20e%20Malas/01118/Mochila-Couro-Sintetico-30-Litros-18855d1-1713547973-400x400.jpg'
        },
        {
            id: 2,
            image: 'https://ageubrindes.com.br/image/cache/catalog/Mochilas%20e%20Malas/01118/Mochila-Couro-Sintetico-30-Litros-18855d4-1713548010-400x400.jpg'
        },
        {
            id: 3,
            image: 'https://ageubrindes.com.br/image/cache/catalog/Mochilas%20e%20Malas/13897/Mochila-de-Nylon-9952-1561638079-800x800.jpg'
        },
        {
            id: 4,
            image: 'https://ageubrindes.com.br/image/cache/catalog/Mochilas%20e%20Malas/13897/Mochila-de-Nylon-9952d2-1561635632-800x800.jpg'
        }
    ];


    const [imageSelect, setImageSelect] = useState(imagesArray[0]);

    function toggleImage(id) {

        const selectedImage = imagesArray.find((fil) => fil.id === id);
        

        if (selectedImage) {
            setImageSelect(selectedImage);
        }
    }

    return (
        <>
            <Container>
                <ContainerBox>
                    {imagesArray.map((img) => (
                        <ContainerBoxSelect onClick={() => toggleImage(img.id)} key={img.id}>
                            <img src={img.image} alt={`Imagem ${img.id}`} />
                        </ContainerBoxSelect>
                    ))}
                </ContainerBox>
                <ContainerBannerImage>
                
                    {imageSelect && imageSelect.image ? (
                        <img src={imageSelect.image} alt="Imagem selecionada" />
                    ) : (
                        <p>Imagem não encontrada</p>  
                    )}
                </ContainerBannerImage>
            </Container>
        </>
    );
};
