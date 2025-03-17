import { Aside, Container, ContainerTable } from "./styles";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { PiExportBold } from "react-icons/pi";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { TableProductsData } from "../../../data/Admin/TableProducts";
import { exportToExcel } from "../../../functions/Admin/exportToExcel";
import { useProducts } from "../../../hooks/Products/useProducts";
import { ButtonExport } from "../components/ButtonExport";
import { ProductPDF } from "../components/PDF/products";

export const Products = () => {
    const navigate = useNavigate();

	const { columns, rows } = TableProductsData();

	const { data } = useProducts()

	// return <ProductPDF/>

    return (
        <Container>
            <Aside>
                <div className="container">
                    <input className="input" placeholder="Qual produto você procura?" />
                    <Button sx={{ backgroundColor: "#ccc" }}>
                        <SearchIcon color="primary" />
                    </Button>
                </div>

                <div className="container">
                    <Button 
                        variant="contained" 
                        sx={{ gap: "6px", width: "100%" }} 
                        onClick={() => navigate("/administrativo/produtos/create")}
                    >
                        <FaPlus color="#fff" />
                        Adicionar Produto
                    </Button>
				
                    
					<ButtonExport data={data?.content}/>
                </div>
            </Aside>
            <ContainerTable>
                <Paper sx={{ height: 400, width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pbreandSizeOptions={[5, 20]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </ContainerTable>
        </Container>
    );
};