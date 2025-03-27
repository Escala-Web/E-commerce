import { useState } from "react";
import html2pdf from "html2pdf.js";

export const usePDF = () => {
    const [elementHTML, setElementHTML] = useState("pdf-relatorio");
    const [fileName, setFileName] = useState("Relatório");


    const generatePDF = () => {
        const element = document.getElementById(elementHTML);

        if (element) {
            html2pdf()
                .from(element)
                .save(`${fileName}.pdf`);
        } else {
            alert(`Elemento '${elementHTML}' não encontrado`);
        }
    };

    return { setElementHTML, setFileName, generatePDF, elementHTML };
};
