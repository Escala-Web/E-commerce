import { FaFolder } from "react-icons/fa";
import { Container } from "./styles";
import { useState } from "react";
import { Typography } from "@mui/material";
import { CgMoreAlt } from "react-icons/cg";
import { Settings } from "../Settings";

export const ListFilders = ({ data, isPage }) => {

    const [openSettingsIndex, setOpenSettingsIndex] = useState(null); // Armazenando o índice da pasta que foi clicada

    const handleSettingsClick = (index) => {
        setOpenSettingsIndex((prevIndex) => (prevIndex === index ? null : index)); // Alternando entre abrir e fechar a configuração para a pasta clicada
    };

    

    return (
        <Container>
            {data?.content?.map((folder, index) => (
                <div className="card" key={folder.id || index}> {/* Usando o id da pasta ou o índice como chave */}
                    <FaFolder size={120} color="#50aff5" />
                    <p>{folder.name}</p>
                    <Typography
                        className="settings"
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        onClick={() => handleSettingsClick(index)} // Passando o índice da pasta clicada
                    >
                        <CgMoreAlt size={26} />
                    </Typography>
                    {openSettingsIndex === index && (  // Renderiza o Settings apenas para a pasta clicada
                        <Settings isPage={isPage === 'arquivo' ? 'arquivo' : 'lixeira'} folder={folder} setClick={handleSettingsClick}/>
                    )}
                </div>
            ))}
        </Container>
    );
};
