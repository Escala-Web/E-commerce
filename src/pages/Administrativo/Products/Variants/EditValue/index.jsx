import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFindAllVariations } from '../../../../../hooks/Variants/useFindAllVariant';
import { FormControl, TextField, RadioGroup, FormControlLabel, Radio, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useFindVariatValue } from '../../../../../hooks/Variants/useFindVarientValue';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
  p: 4,
};

export const EditValue = () => {
  const [open, setOpen] = React.useState(false);
  const [variantValuesData, setVariantValuesData] = React.useState({
    id: '',
    name: '',
    price: '',
    stock: '',
    sku: '',
  });
  const [selectedVariant, setSelectedVariant] = React.useState(null); // To store selected variant

  const { data: variantValue } = useFindVariatValue(variantValuesData.id);

  console.log(variantValue)

  function handleOpen(variant) {

    setVariantValuesData({
      id: variant.id_variant_attribute,
      name: variant.name,
      price: variant.price || '', // Assuming price is part of the variant data
      stock: variant.stock || '', // Assuming stock is part of the variant data
      sku: variant.sku || '', // Assuming SKU is part of the variant data
    });
    setSelectedVariant(variant.id_variant_attribute); // Set initial selected variant
    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  const { data: variants } = useFindAllVariations();

  const handleRadioChange = (event) => {
    const variantId = event.target.value;
    const selected = variants.content.find((variant) => variant.id_variant_attribute === variantId);
    setSelectedVariant(variantId);
    setVariantValuesData({
      ...variantValuesData,
      price: selected?.price || '',
      stock: selected?.stock || '',
      sku: selected?.sku || '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVariantValuesData({
      ...variantValuesData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Updated variant data: ', variantValuesData);
    // Here, send the updated data to your API to save the changes
  };

  return (
    <div>
      <div className="container_variants_values">
        {variants?.content?.map((vari) => (
          <div
            style={{ cursor: 'pointer' }}
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
            Com base nas suas opções de produto, estas são as diferentes versões do seu produto que os clientes podem comprar.
          </Typography>
          <FormControl sx={{ marginTop: '1rem' }}>
            {/* Table for selecting variants and editing their values */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Select</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Preço</TableCell>
                    <TableCell>Estoque</TableCell>
                    <TableCell>SKU</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {variants?.content?.map((variant) => (
                    <TableRow key={variant.id_variant_attribute}>
                      <TableCell>
                        <RadioGroup
                          row
                          value={selectedVariant}
                          onChange={handleRadioChange}
                        >
                          <FormControlLabel
                            value={variant.id_variant_attribute}
                            control={<Radio />}
                            label="Select"
                          />
                        </RadioGroup>
                      </TableCell>
                      <TableCell>{variant.name}</TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          variant="standard"
                          name="price"
                          value={variant.id_variant_attribute === selectedVariant ? variantValuesData.price : ''}
                          onChange={handleInputChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          variant="standard"
                          name="stock"
                          value={variant.id_variant_attribute === selectedVariant ? variantValuesData.stock : ''}
                          onChange={handleInputChange}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          variant="standard"
                          name="sku"
                          value={variant.id_variant_attribute === selectedVariant ? variantValuesData.sku : ''}
                          onChange={handleInputChange}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              onClick={handleSubmit}
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
