import { useQuery } from "@tanstack/react-query";
import { https } from "../../config/https";


async function findAll({id}) {
  const token = JSON.parse(localStorage.getItem('userLogin'));

  try {
    // Fazendo a requisição POST com o corpo
    const { data } = await https.get(
      "/variations/get-values/"+id,
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

export const useFindAllVariationsValue = () => {

  return useQuery({
    queryFn: findAll,
    queryKey: ['variantsValue']
  })
};
