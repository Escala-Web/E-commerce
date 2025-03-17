import html2pdf from 'html2pdf.js';

export const exportToPDF = () => {
  const element = document.getElementById('pdf-content');

  if (element) {
    html2pdf()
      .from(element)
      .save('produtos.pdf');
  } else {
    console.error("Elemento 'pdf-content' não encontrado");
  }
};
