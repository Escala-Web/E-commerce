import * as XLSX from 'xlsx';
import { formatPrice } from '../../utils/formatPrice';

export const exportToExcel = (data) => {
    // Flatten the variations to include them individually in the Excel export


    const formattedData = data.flatMap(item => 
        item.variations.map(variation => ({
            ID: item.id_product,
            Codigo_de_barra: variation.sku || 'N/A', // Adjust as needed to include other variation data
            Produto: item.name,
            Categoria: item.branch || 'N/A',
            Marca: item.branch || 'Unknown',
            valor: formatPrice(variation.price) || 'R$ 0,00', // Include variation details if you want
            Imagem: 'http://192.168.15.7/api-php' + (variation.image_path || 'default_image.jpg'),
            Estoque: variation.sku || 'N/A',   // Assuming each variation has a price
        }))
    );

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'produtos.xlsx');
};


export const exportRelatorioToExcel = (data, filename) => {

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${filename}.xlsx`);
} 