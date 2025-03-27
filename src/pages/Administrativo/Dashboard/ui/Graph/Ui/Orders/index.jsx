import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import { Container } from "./styles";
import { HeaderExport } from "../../../../../components/HeaderExport";

// Registrar os componentes necessários para o gráfico de pizza
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const data = {
    labels: ["Cancelado", "Pendente", "Procesando", "Enviando", "Entregue", "Estorno"],
    datasets: [
      {
        data: [400, 300, 300, 200, 140, 100],
        backgroundColor: [
          "red",           
          "#FEC53D",     
          "#0089ff",       
          "#FF8042",       
          '#4AD991',       
          '#FF0000',       
        ],
        borderWidth: 1,
      },
    ],
  };
  

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.raw} units`,
      },
    },
    legend: {
      position: "left", 
      labels: {
        usePointStyle: false, 
        boxWidth: 20,  
        padding: 30,  
        margin: 40,
        font: {
          size: 16, 
          weight: 400,  
        },
      },
    },
  },
};

export const GraphOrders = ({option}) => {
  return (
    <Container>
    <HeaderExport title='Pedidos' option={option}/>
      <div className="container">
        <Pie data={data} options={options} />
      </div>
    </Container>
  );
};
