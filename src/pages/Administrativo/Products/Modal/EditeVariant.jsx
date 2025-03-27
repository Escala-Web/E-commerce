import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
  Divider,
} from "@mui/material";

export const ModalVariantUpdate = ({ open, setOpen, variationData }) => {
  const [rows, setRows] = React.useState([
    { option: "", image: "" },
  ]);

  // Atualiza os valores dos inputs na tabela
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Adiciona uma nova linha
  const addRow = () => {
    setRows([...rows, { option: "", image: "" }]);
  };

  // Fecha o modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Variação {variationData?.name}</DialogTitle>
      <Divider />

      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Opções</TableCell>
              <TableCell>Imagens</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    fullWidth
                    value={row.option}
                    onChange={(e) =>
                      handleInputChange(index, "option", e.target.value)
                    }
                    placeholder="Digite a opção"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={row.image}
                    onChange={(e) =>
                      handleInputChange(index, "image", e.target.value)
                    }
                    placeholder="URL da imagem"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button onClick={addRow} variant="outlined" sx={{ mt: 2 }}>
          Adicionar Linha
        </Button>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Fechar
        </Button>
        <Button variant="contained" color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
