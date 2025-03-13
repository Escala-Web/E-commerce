import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { AiTwotoneFileAdd } from "react-icons/ai";
import { useUploadFiles } from '../../../../../hooks/FileManager/Files/useCreateFile';
import { FaSquarePlus } from "react-icons/fa6";

export const UploadsOfFiles = ({setIsUploadsFiles, folder}) => {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const { mutate: createFile } = useUploadFiles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createFile({
      id_folder: folder.id ? folder.id : 1, 
      files: images,
    })

    setOpen(false);
    // setIsUploadsFiles(false);
  };



  return (
    <div>

      <Button onClick={handleClickOpen} >
        <FaSquarePlus color='#50aff5' size={40}/>
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Formulário de Upload de Imagens</DialogTitle>
        <DialogContent>
          <Box sx={{ width: '100%' }}>
            

            <Button
              variant="contained"
              component="label"
              sx={{ marginBottom: 2, width: '100%' }}
            >
              Selecionar Imagens
              <AiTwotoneFileAdd />

              <input
                type="file"
                accept="image/*"
                name='files[]'
                multiple
                hidden
                onChange={handleImageChange}
              />
            </Button>

            <Box sx={{ marginBottom: 2 }}>
              {images.length > 0 && (
                <Typography variant="body1" gutterBottom>
                  Imagens Selecionadas:
                </Typography>
              )}
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 100,
                      height: 100,
                      margin: 1,
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`preview-${index}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
