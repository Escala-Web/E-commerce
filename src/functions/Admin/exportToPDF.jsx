import html2pdf from 'html2pdf.js';
import logo from '../../assets/logo/logo-nova.png'; // Certifique-se de que o caminho esteja correto

export const exportToPDF = (elementHTML, fileName, titulo) => {
  const element = document.getElementById(elementHTML);

  if (element) {
    // Criar um container para envolver o conteúdo e o cabeçalho
    const container = document.createElement("div");

    // Criar o Header (como no seu componente React)
    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.flexDirection = "column";
    header.style.gap = ".6rem";
    header.style.width = "100%";
    header.style.padding = "1rem 0";

    // Criar o header_top
    const headerTop = document.createElement("div");
    headerTop.style.display = "flex";
    headerTop.style.alignItems = "center";
    headerTop.style.justifyContent = "space-between";
    headerTop.style.width = "100%";
    headerTop.innerHTML = `
      <h4 style="font-size: 18px; font-weight: 700; opacity: 0.8; text-transform: uppercase;">Escala Company Informática LTDA</h4>
      <img src="${logo}" alt="Logo" style="width: 200px;" />
    `;
    header.appendChild(headerTop);

    // Criar o header_content
    const headerContent = document.createElement("div");
    headerContent.style.borderTop = "1px solid #ccc";
    headerContent.style.borderBottom = "1px solid #ccc";
    headerContent.style.width = "100%";
    headerContent.style.textAlign = "center";
    headerContent.innerHTML = `
      <p style="font-weight: 400; font-size: 14px; color: #1e1e1e;">
        Sites e lojas virtuais - sistemas web - arte final - catálogos - cartões de visita - soluções completas
      </p>
    `;
    header.appendChild(headerContent);

    // Adicionar o cabeçalho ao container
    container.appendChild(header);

    // Adicionar o título logo após o cabeçalho
    const title = document.createElement("h2");
    title.style.textAlign = "center";
    title.style.fontSize = "22px";
    title.style.fontWeight = "600";
    title.style.margin = "20px 0";
    title.innerText = titulo;  // Altere para o título desejado
    container.appendChild(title);

    // Adicionar o conteúdo original (elemento que será exportado)
    container.appendChild(element.cloneNode(true));

    // Criar o footer (opcional, se necessário)
    const footer = document.createElement("div");
    footer.style.textAlign = "center";
    footer.innerHTML = "<p>Página gerada automaticamente</p>";
    container.appendChild(footer);

    // Gerar o PDF com o conteúdo do container
    html2pdf()
      .set({
        margin: 10,
        filename: `${fileName}.pdf`,
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        jsPDF: { format: "a4", orientation: "portrait" }
      })
      .from(container)
      .save();
  } else {
    alert("Elemento não encontrado");
  }
};
