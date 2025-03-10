import { useMutation, useQueryClient } from "@tanstack/react-query";
import { https } from "../../../config/https.js";

async function uploadFiles({ id_folder, files }) {
    const token = JSON.parse(localStorage.getItem('userLogin'));

    const formData = new FormData();
    formData.append("id_folder", id_folder);

    files.forEach((file) => {
        formData.append("files[]", file);
    });

    try {
        const { data } = await https.post("/media/upload-file", formData, {
            headers: {
                Authorization: `Bearer ${token[0].token}`,
                "Content-Type": "multipart/form-data",
            },
        });

        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Erro ao enviar arquivos");
    }
}

export const useUploadFiles = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: uploadFiles,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["findAllFolder"]);
        },
        onError: (error) => {
            console.error("Erro ao enviar arquivos:", error);
        },
    });
};
