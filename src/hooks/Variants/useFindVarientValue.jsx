import { useQuery } from "@tanstack/react-query";
import { https } from "../../config/https";

async function findAll({ queryKey  }) {
  const token = JSON.parse(localStorage.getItem('userLogin'));
  const [_, id] = queryKey; 
  
  try {
    // Fazendo a requisição POST com o corpo
    const { data } = await https.get(
      "/variations/get-values/"+ id,
      {
        headers: {
            Authorization: `Bearer ${token[0].token}`
        }
      }
    );

    return data;
  } catch (error) {
    return error;
  }
}

export const useFindVariatValue = (id) => {

  return useQuery({
    queryFn: findAll,
    queryKey: ['variant-values', id],
  })
};
