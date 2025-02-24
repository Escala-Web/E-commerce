import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Skeleton, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { https } from "../../../../../config/https";
import { useFecth } from "../../../../../hooks/useFecth";

export const AsideProductsFilter = () => {

    const { data: category, loading, erro } = useFecth('/categories/get-categories');

	return (
		<>
			<FormControl className="form-filter">
				<FormLabel id="demo-radio-buttons-group-label">{!loading ? <Skeleton animation="wave" width={120} height={36}/> : 'Categorias'}</FormLabel>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					// defaultValue="female"
					name="radio-buttons-group"
				>
                {(category.content || []).map((cat) => (
                    <>
                    {!loading ? <Skeleton animation="wave" height={40}/> : 
					<FormControlLabel value={cat.name} control={<Radio />} label={cat.name} />
                    }
                    </>
                ))}

				</RadioGroup>
			</FormControl>

			<FormControl>
				<FormLabel id="demo-radio-buttons-group-label">{!loading ? <Skeleton animation="wave" width={120} height={36}/> : 'Categorias'}</FormLabel>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					// defaultValue="female"
					name="radio-buttons-group"
				>
                    {!loading ? <Skeleton animation="wave" height={40}/> : 
					<>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="male" control={<Radio />} label="Male" />
					<FormControlLabel value="other" control={<Radio />} label="Other" />
                    </>
                    }
				</RadioGroup>
			</FormControl>
			<div>
				<FormLabel id="demo-radio-buttons-group-label">{!loading ? <Skeleton animation="wave" width={120} height={36}/> : 'Preço'}</FormLabel>
				{!loading ? <Skeleton animation="wave" height={10} width="80%" />: 
                
                <Slider
					getAriaLabel={() => "Minimum distance shift"}
					valueLabelDisplay="auto"
					disableSwap
				/>
                }
			</div>
		</>
	);
};
