import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { FaFilePdf } from "react-icons/fa6";
import { PiFileXlsFill } from "react-icons/pi";
import { exportToExcel } from "../../../../functions/Admin/exportToExcel";
import { exportToPDF } from "../../../../functions/Admin/exportToPDF";
import { ProductPDF } from "../PDF/products";

export function ButtonExport({ data }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        if (selectedIndex === 0) {
            exportToExcel(data);
        } else {
            handleExportToPDF();
        }
    };

    const handleExportToPDF = () => {
        // Criar um elemento temporário fora do DOM principal
        const pdfContainer = document.createElement("div");
        document.body.appendChild(pdfContainer);

        // Renderiza o componente invisível no DOM apenas para geração do PDF
        ReactDOM.render(<ProductPDF data={data} />, pdfContainer);

        // Aguarde um curto período para garantir a renderização antes de exportar
        setTimeout(() => {
            exportToPDF(); // Chama a função que gera o PDF
            document.body.removeChild(pdfContainer); // Remove o elemento temporário
        }, 500);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <React.Fragment>
            <ButtonGroup
                variant="outlined"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
            >
                <Button onClick={handleClick} size="small" sx={{ width: "170px" }}>
                    {selectedIndex === 0 ? (
                        <>
                            <PiFileXlsFill />
                            Exportar em Excel
                        </>
                    ) : (
                        <>
                            <FaFilePdf />
                            Exportar em PDF
                        </>
                    )}
                </Button>
                <Button
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper
                sx={{ zIndex: 1 }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom" ? "center top" : "center bottom",
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    <MenuItem
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleMenuItemClick(event, 0)}
                                    >
                                        <PiFileXlsFill />
                                        Exportar em Excel
                                    </MenuItem>
                                    <MenuItem
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleMenuItemClick(event, 1)}
                                    >
                                        <FaFilePdf />
                                        Exportar em PDF
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
}
