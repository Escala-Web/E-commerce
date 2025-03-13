import { useQuery } from "@tanstack/react-query";
import { https } from "../../../config/https";

async function findAll(folder) {
  const token = JSON.parse(localStorage.getItem('userLogin'));

  // console.log(folder)

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
    enabled: !!folder.id,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    
  });
};
