import { useQuery } from "@tanstack/react-query";
import { https } from "../../../config/https";

async function findAll(folder) {
  const token = JSON.parse(localStorage.getItem('userLogin'));

  try {
    // Fazendo a requisição POST com o corpo
    const { data } = await https.post(
      "/media/get-content-folder",
      {
        parent_id: folder.id,
        is_trash: folder.is_trash,
      },
      {
        headers: {
          Authorization: `Bearer ${token[0].token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
}

export const useFindAllFolder = (folder) => {
  return useQuery(["findAllFolder", folder], () => findAll(folder), {
    enabled: !!folder.id, // Habilita a consulta apenas quando `folder.id` estiver disponível
    refetchOnWindowFocus: false, // Evitar refetch desnecessário ao focar a janela
  });
};
