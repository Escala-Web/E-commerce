import React, { useState, useEffect } from "react";
import {
	AreaChart,
	Area,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { Container } from "./styles";
import { ButtonExport } from "../../../../../components/ButtonExport";
import { HeaderExport } from "../../../../../components/HeaderExport";

const allData = [
	{ name: "Janeiro", faturamento: 4200 },
	{ name: "Fevereiro", faturamento: 3000 },
	{ name: "Março", faturamento: 100 },
	{ name: "Abril", faturamento: 865 },
	{ name: "Maio", faturamento: 1890 },
	{ name: "Junho", faturamento: 1503 },
	{ name: "Julho", faturamento: 123 },
	{ name: "Agosto", faturamento: 4000 },
	{ name: "Setembro", faturamento: 2000 },
	{ name: "Outubro", faturamento: 2100 },
	{ name: "Novembro", faturamento: 3400 },
	{ name: "Dezembro", faturamento: 3900 },
];

export const GraphSales = ({ color = "#8884d8", option }) => {
	const [selectedMonth, setSelectedMonth] = useState("");
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(6000);
	const [displayData, setDisplayData] = useState(allData);

	useEffect(() => {
		let filtered = allData.filter(
			(d) => d.faturamento >= minValue && d.faturamento <= maxValue
		);

		if (selectedMonth) {
			filtered = filtered.filter((d) => d.name === selectedMonth);
		}

		setDisplayData(filtered);
	}, [selectedMonth, minValue, maxValue]);

	return (
		<>
			<Container>
				<HeaderExport title="Faturamento" option={option} />

				<div className="container">
					<div className="container_form">
						<label>
							Selecione o mês:
							<select
								value={selectedMonth}
								onChange={(e) => setSelectedMonth(e.target.value)}
							>
								<option value="">Todos</option>
								{allData.map((d) => (
									<option key={d.name} value={d.name}>
										{d.name}
									</option>
								))}
							</select>
						</label>

						<label style={{ marginLeft: "10px" }}>
							Valor mínimo:
							<input
								type="number"
								value={minValue}
								onChange={(e) => setMinValue(Number(e.target.value))}
							/>
						</label>

						<label style={{ marginLeft: "10px" }}>
							Valor máximo:
							<input
								type="number"
								value={maxValue}
								onChange={(e) => setMaxValue(Number(e.target.value))}
							/>
						</label>
					</div>
				</div>

				<div id="pdf-sales" style={{ height: "400px", width: "100%" }}>
					<ResponsiveContainer width="100%" height="100%">
						{selectedMonth && displayData.length === 1 ? (
							<BarChart
								data={displayData}
								margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="faturamento" fill={color} barSize={60} />
							</BarChart>
						) : (
							<AreaChart
								data={displayData}
								margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area
									type="monotone"
									dataKey="faturamento"
									stroke={color}
									fill={color}
								/>
							</AreaChart>
						)}
					</ResponsiveContainer>
				</div>
			</Container>
		</>
	);
};
