import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Container } from "./styles";
import { exportToPDF } from "../../../../functions/Admin/exportToPDF";
import { usePDF } from "../../../../hooks/pdf";
import { GerarPDF } from "../PDF/GerarPDF";
import { GraphSales } from "../../Dashboard/ui/Graph/Ui/Sales";
import { GraphOrders } from "../../Dashboard/ui/Graph/Ui/Orders";
import { exportRelatorioToExcel } from "../../../../functions/Admin/exportToExcel";
import { formatDataTime } from "../../../../utils/formatDataTime";

const options = ["Exportar excel", "Exportar PDF"];

export const HeaderExport = ({ title, option, element }) => {


	const [open, setOpen] = React.useState(false);
	const [relatorio, setRelatorio] = React.useState("sales");

	const anchorRef = React.useRef(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const dataTime = formatDataTime()

	

	const handleClick = () => {
		if (option.page === "order") {
			if (selectedIndex === 0) {
				console.log("Exportar excel");
			} else {
				const elementId = "pdf-order";
				const fileName = "Relatório_de_pedidos";
				setRelatorio("order");
				setTimeout(() => exportToPDF(elementId, fileName, "Pedidos"), 200);
			}
		} else if (option.page === "sales") {
			if (selectedIndex === 0) {
				console.log("Exportar excel");
			} else {
				const elementId = "pdf-sales";
				const fileName = "Relatório_de_faturamento";
				setRelatorio("order");
				setTimeout(() => exportToPDF(elementId, fileName, "Faturamento"), 200);
			}
		} else if (option.page === "usersFindAll") {
			if (selectedIndex === 0) {
				const filename = `Relatorio_de_usuarios_${dataTime}`

				exportRelatorioToExcel(option.data, filename)
			} else {
				const elementId = "pdf-usersFindAll";
				const fileName = "Relatório_de_users_";
				setRelatorio("order");
				setTimeout(() => exportToPDF(elementId, fileName, "Users"), 200);
			}
		}
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
		<>
			<Container>
				<h4>{title}</h4>

				<ButtonGroup
					variant="outlined"
					ref={anchorRef}
					aria-label="Button group with a nested menu"
				>
					<Button onClick={handleClick}>{options[selectedIndex]}</Button>
					<Button
						size="small"
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
										{options.map((option, index) => (
											<MenuItem
												key={option}
												disabled={index === 2}
												selected={index === selectedIndex}
												onClick={(event) => handleMenuItemClick(event, index)}
											>
												{option}
											</MenuItem>
										))}
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</Container>

			<div style={{ display: "none" }}>
				{/* <GerarPDF>
				{relatorio === 'order' && <GraphOrders />}
				{relatorio === 'sales' && <GraphSales />}
			</GerarPDF> */}
			</div>
		</>
	);
};
