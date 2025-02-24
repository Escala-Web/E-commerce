import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	...theme.applyStyles("dark", {
		backgroundColor: "#1A2027",
	}),
}));
export const SectionLancamento = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* Imagem principal que ocupa metade da tela em telas maiores, e 12 colunas (tela cheia) em telas pequenas */}
          <Grid item xs={12} sm={6}>
            <img 
              src="https://static.netshoes.com.br/bnn/l_netshoes/2025-02-20/9225_corre4.png" 
              style={{ width: "100%", height: "auto" }} 
              alt="Imagem Principal"
            />
          </Grid>
  
          {/* Imagem do grid secundário */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              {/* Primeira imagem do grid secundário */}
              <Grid item xs={6} sm={6}>
                <img 
                  src="https://static.netshoes.com.br/bnn/l_netshoes/2025-02-20/6183_nike_free_run.png" 
                  style={{ width: "100%", height: "auto" }} 
                  alt="Nike Free Run"
                />
              </Grid>
              
              {/* Segunda imagem do grid secundário */}
              <Grid item xs={6} sm={6}>
                <img 
                  src="https://static.netshoes.com.br/bnn/l_netshoes/2025-02-20/6183_nike_free_run.png" 
                  style={{ width: "100%", height: "auto" }} 
                  alt="Nike Free Run"
                />
              </Grid>
  
              {/* Imagem maior na parte inferior do grid secundário */}
              <Grid item xs={12}>
                <img 
                  src="https://static.netshoes.com.br/bnn/l_netshoes/2025-02-20/5236_palmeiras.png" 
                  style={{ width: "100%", height: "auto" }} 
                  alt="Palmeiras"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
	);
};
