import { Slider } from "@mui/material";
import { Container } from "./styles";

export const Filters = ({ category, brands }) => {

	return (
		<Container>
			<div className="container_filter border">
				<h3 className="title">Categorias</h3>
				<form className="container_form">
					{category?.parents?.flatMap((cat) => (
						<div key={cat.id_category}>
							<div className="form_grup">
								<input
									type="radio"
									className="input_radio"
									id={cat.id_category}
									name="category"
								/>
								<label htmlFor={cat.id_category}>{cat.name}</label>
							</div>
							{cat?.children?.map((chil) => (
								<div key={chil.id_category} className="form_grup children">
									<input
										type="radio"
										className="input_radio"
										id={chil.id_category}
										name="category"
									/>
									<label htmlFor={chil.id_category}>{chil.name}</label>
								</div>
							))}
						</div>
					))}
				</form>
			</div>

			<div className="container_filter border">
				<h3 className="title mt">Marcas</h3>
				<form className="container_form">
					{brands?.map((item) => (
						<div key={item.id_brand} className="form_grup">
							<input
								type="radio"
								className="input_radio"
								id={item.id_brand}
								name="brand"
							/>
							<label htmlFor={item.id_brand}>{item.name}</label>
						</div>
					))}
				</form>
			</div>

			<div className="container_filter">
				<h3 className="title mt">Preço</h3>
				<form className="container_form">
					<Slider valueLabelDisplay="auto" />
				</form>
			</div>
		</Container>
	);
};
