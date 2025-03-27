import React from "react";
import { Container } from "./styles";
import { GraphSales } from "./Ui/Sales";
import { GraphOrders } from "./Ui/Orders";

export const Graph = ({ color, option }) => {



	return (
		<Container>
			{option.page === 'sales' && <GraphSales color={color} option={option}/>}
			{option.page === 'order' && <GraphOrders color={color} option={option}/>}
		</Container>
	);
};
