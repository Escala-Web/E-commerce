import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createFolderAPI, findAllFoldersAPI } from "../../../services/Admin/FileManager/folders";

export const useFolder = () => {

    const queryClient = useQueryClient();

    const createFolder = useMutation({
        mutationFn: createFolderAPI,
        onSuccess: (data) => {
            console.log(data);

            queryClient.invalidateQueries(['folders']);
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const findAllFolder = useQuery(["folders", folder], () => findAllFoldersAPI(folder), {
        enabled: !!folder.id,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        
      });

    return { createFolder, findAllFolder }

}