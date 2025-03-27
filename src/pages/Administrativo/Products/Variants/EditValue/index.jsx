import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFindAllVariations } from "../../../../../hooks/Variants/useFindAllVariant";
import {
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useFindVariatValue } from "../../../../../hooks/Variants/useFindVarientValue";
import { FileManager } from "../../../components/FileManager";
import { ProductContext } from "../../../../../context/Product";
import { toast } from "react-toastify";

import { ImagesSelects } from "../../../components/FileManager/ImagesSelect";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  boxShadow: 24,
  p: 4,
};

export const EditValue = () => {
  const [open, setOpen] = React.useState(false);
  const [variantValuesData, setVariantValuesData] = React.useState({ id: "" });
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [sku, setSku] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [is_default, setIs_default] = React.useState(false);

  const { data: variantValue } = useFindVariatValue(variantValuesData.id);
  const { addVariation } = React.useContext(ProductContext);

  const { data: variants } = useFindAllVariations();

  // Ao abrir o modal, seta o id e seleciona a variação inicial
  const handleOpen = (variant) => {
    setVariantValuesData({ id: variant.id_variant_attribute });
    setSelectedVariant(String(variant.id_variant_attribute)); // Set initial selected variant
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Ao selecionar uma nova variação, preenche os campos de preço, estoque e SKU
  const handleRadioChange = (event) => {
    const variantId = event.target.value;
    const selected = variantValue.content.find(
      (variant) => variant.id_variant_attribute_value === variantId
    );

    setSelectedVariant(variantId);
    setPrice(selected?.price || "");
    setStock(selected?.stock || "");
    setSku(selected?.sku || "");
    setDiscount(selected?.discount || "");
    setIs_default(selected?.is_default || "");
  };

  // Atualiza os valores de preço, estoque e SKU com base na mudança do usuário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "price") setPrice(value);
    if (name === "stock") setStock(value);
    if (name === "sku") setSku(value);
    if (name === "discount") setDiscount(value);
    if (name === "is_default") setIs_default(value);
  };

  // Submissão dos dados
  const handleSubmit = () => {
    // Verifica se há um variant selecionado e se os campos têm valores
    if (!selectedVariant || !price || !stock || !sku || !discount) {
      toast.warning("Todos os campos devem ser preenchidos!");
      return; // Impede o envio se algum campo estiver vazio
    }

    // Cria um objeto de variação atualizado
    const updatedVariant = {
      value_variant: selectedVariant,
      price,
      stock,
      sku,
      discount,
      is_default,
    };

    // Adiciona a variação ao formData
    addVariation(updatedVariant);
    setOpen(false);
  };

  

  return (
    <div>
      <div className="container_variants_values">
        {variants?.content?.map((vari) => (
          <div
            key={vari.id_variant_attribute_value}
            style={{ cursor: "pointer" }}
            className="container_variant"
            onClick={() => handleOpen(vari)}
          >
            <Typography variant="p" component="div">
              {vari.name}
            </Typography>
          </div>
        ))}
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h4" component="h2">
            Variante para {variantValuesData.name}
          </Typography>
          <Typography
            variant="p"
            component="bold"
            id="keep-mounted-modal-description"
            sx={{ mt: 6 }}
          >
            Com base nas suas opções de produto, estas são as diferentes versões
            do seu produto que os clientes podem comprar.
          </Typography>
          <FormControl sx={{ marginTop: "1rem" }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Select</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Preço</TableCell>
                    <TableCell>Estoque</TableCell>
                    <TableCell>SKU</TableCell>
                    <TableCell>Desconto</TableCell>
                    <TableCell>Principal?</TableCell>
                    <TableCell>Imagem</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {variantValue?.content?.map((variant) => (
                    <TableRow key={variant.id_variant_attribute_value}>
                      <TableCell>
                        <RadioGroup value={selectedVariant} onChange={handleRadioChange}>
                          <FormControlLabel
                            value={variant.id_variant_attribute_value}
                            control={<Radio />}
                            label="Selecionar"
                          />
                        </RadioGroup>
                      </TableCell>
                      <TableCell>{variant.value}</TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          variant="standard"
                          name="price"
                          value={
                            String(variant.id_variant_attribute_value) === String(selectedVariant)
                              ? price
                              : ""
                          }
                          onChange={handleInputChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          variant="standard"
                          name="stock"
                          value={
                            String(variant.id_variant_attribute_value) === String(selectedVariant)
                              ? stock
                              : ""
                          }
                          onChange={handleInputChange}
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          fullWidth
                          variant="standard"
                          name="sku"
                          value={
                            String(variant.id_variant_attribute_value) === String(selectedVariant)
                              ? sku
                              : ""
                          }
                          onChange={handleInputChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          variant="standard"
                          name="discount"
                          value={
                            String(variant.id_variant_attribute_value) === String(selectedVariant)
                              ? discount
                              : ""
                          }
                          onChange={handleInputChange}
                        />
                      </TableCell>

                      <TableCell>
                          <input 
                            name='is_default'
                            type="checkbox"
                            onChange={handleInputChange}
                            value={
                            String(variant.id_variant_attribute_value) === String(selectedVariant)
                              ? discount
                              : ""
                          }
                          />
                      </TableCell>

                      <TableCell>
                        <FileManager name="Gerenciador de" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Renderiza o componente ImagesSelects fora do Table */}
            {selectedVariant && (
              <Box sx={{ mt: 2 }}>
                <ImagesSelects data={variantValue?.content} />
              </Box>
            )}

            <Button
              onClick={handleSubmit}
              type="button"
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
            >
              Atualizar Variações
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};
