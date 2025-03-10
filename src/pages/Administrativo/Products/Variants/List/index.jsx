import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ButtonGroup,
  Fab,
  FormControl,
  InputLabel,
  NativeSelect,
  Stack,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useCreateVariant } from "../../../../../hooks/Variants/useCreateVariant";
import { useFindAllVariations } from "../../../../../hooks/Variants/useFindAllVariant";
import { useCreateVariantValue } from "../../../../../hooks/Variants/useCreateVariantValue";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #ccc",
  boxShadow: 24,
  p: 4,
};

export const Varients = () => {
  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState("");

  const [variantValue, setVariantValue] = React.useState({
    id: "",
    value: "",
    viewer: "",
  });

  function handleChangeVariantValue(event) {
    const { name, value } = event.target;
    setVariantValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isOpenNewVariation, setIsOpenNweVariation] = React.useState(false);
  const { mutate: createVariant, isSuccess } = useCreateVariant();

  const { mutate: createVariantValue, data: dataVariant } = useCreateVariantValue();

  const { data: variants } = useFindAllVariations();

  function handleEnter(event) {
    if (event.key === "Enter") {
      setIsOpenNweVariation(true);
      createVariant({
        name: variant,
      });
      setVariant('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    createVariantValue({
		id: variantValue.id,
		value: variantValue.value,
		viewer: variantValue.viewer
	});

	setVariantValue({
		id: "",
		value: "",
		viewer: "",
	})

	toast.success('Variação cadastrada com sucesso')

	setOpen(false)
  }

  // Função para mudar o tipo de visualização (viewer)
  const handleViewerChange = (viewerType) => {
    setVariantValue((prevValue) => ({
      ...prevValue,
      viewer: viewerType,
    }));
  };

  return (
    <div>
      <Fab onClick={handleOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Opção do produto
          </Typography>

          <Stack sx={{ marginTop: 2 }}>
            <TextField
              id="standard-multiline-flexible"
              label="Nome da variação"
              multiline
              maxRows={4}
              fullWidth
              variant="standard"
              onKeyDown={handleEnter}
              value={variant}
              onChange={(event) => setVariant(event.target.value)}
              name="name"
            />
          </Stack>

          {isOpenNewVariation && (
            <Stack
              direction="column"
              sx={{
                marginTop: "2rem",
              }}
            >
              <form>
                <Stack direction="row" style={{ gap: "1rem" }}>
                  <FormControl sx={{ width: "30%" }}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Opções cadastradas
                    </InputLabel>
                    <NativeSelect
                      onChange={handleChangeVariantValue}
                      value={variantValue.id_variant_attribute}
                      name="id"
                    >
                      {variants?.content?.map((vari) => (
                        <option key={vari.id_variant_attribute} value={vari.id_variant_attribute}>
                          {vari.name}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>

                  <TextField
                    id="standard-multiline-flexible"
                    label="Nome da opção"
                    multiline
                    maxRows={4}
                    fullWidth
                    variant="standard"
                    name="value"
                    value={variantValue.value}
                    onChange={handleChangeVariantValue}
                  />

                  <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                    style={{ alignSelf: "center" }}
                  >
                    <Button
                      onClick={() => handleViewerChange("COLOR")}
                      value="COLOR"
                    >
                      Cor
                    </Button>
                    <Button
                      onClick={() => handleViewerChange("LIST")}
                      value="LIST"
                    >
                      Lista
                    </Button>
                  </ButtonGroup>
                </Stack>
                <Button onClick={handleSubmit} sx={{ marginTop: 2 }} variant="contained">
                  Cadastrar
                </Button>
              </form>
            </Stack>
          )}
        </Box>
      </Modal>
    </div>
  );
};
