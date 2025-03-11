import { useContext, useEffect, useState } from "react";
import { FileManagerContext } from "../../../../../context/FileManager";
import { Container } from "./styles";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { RiCloseCircleFill } from "react-icons/ri";
import { producion } from "../../../../../utils/producion";
import { ProductContext } from "../../../../../context/Product";

export const ImagesSelects = () => {
  const { pictures, handleRemovePicture } = useContext(FileManagerContext);
  const url = producion(false);
  const { setImages } = useContext(ProductContext);

  const [positions, setPositions] = useState({});

  const handlePositionChange = (event, imgId) => {
    const newPosition = event.target.value;
    setPositions((prevPositions) => ({
      ...prevPositions,
      [imgId]: newPosition,
    }));
  };


  const onSubmit = () => {
    
    const imagesWithPositions = pictures.map((img) => ({
      id_media: img.id,
      position: positions[img.id] || 1,
      is_main: true
    }));

    console.log(imagesWithPositions);
    setImages({ pictures: imagesWithPositions})
  };

  return (
    <Container>
      <FormControl sx={{ marginTop: ".6rem" }}>
        <div className="container_content">
          {pictures && pictures.length > 0 ? (
            pictures.map((img) => {
    
              const imageParts = img.file_path.split(".");
              const image = imageParts[0];
              const extention = imageParts[1];

              return (
                <div className="container" key={img.id}>
                  <div
                    className="content"
                    sx={{ border: "1px solid #ccc", margin: ".6rem 0" }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src={`${url}${image}.${extention}`}
                      alt={img.name || "Imagem sem nome"}
                    />
                    <RiCloseCircleFill
                      color="red"
                      size={24}
                      onClick={() => handleRemovePicture(img)}
                    />
                  </div>

                  {/* Campo de posição para cada imagem individualmente */}
                  <TextField
                    id="standard-basic"
                    label="Posição"
                    value={positions[img.id] || ""}
                    onChange={(event) => handlePositionChange(event, img.id)}
                    variant="standard"
                    sx={{ marginBottom: ".4rem" }}
                  />
                </div>
              );
            })
          ) : (
            <Box sx={{ textAlign: "center", color: "gray" }}>
              Nenhuma imagem selecionada.
            </Box>
          )}
        </div>
        <Button onClick={onSubmit} variant="contained">Salvar imagens</Button>
      </FormControl>
    </Container>
  );
};
