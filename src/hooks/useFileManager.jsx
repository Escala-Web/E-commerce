import { useEffect, useState } from "react";
import { http } from "../config/http";

export const useFileManager = () => {

    const [listFoldersAndFiles, setListFoldersAndFiles] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    async function createdFolderAndFiles(folder) {
        setIsEmpty(false);
        try {
            await http.post('/folder', {
                folder: folder,
                status: 1
            });
            setIsEmpty(true);
        } catch (error) {
            console.log(error);
        }
    }

    async function findAll() {
        try {
            const folders = await http.get('/folder');
            setListFoldersAndFiles(folders);
        } catch (error) {
            console.log(error);
        }
    }

    async function trash(folder, status) {
        setIsEmpty(false);
        try {
            await http.put(`/folder/${folder.id}`, {
                folder: folder.folder,
                status: status
            })
            setIsEmpty(true);
        } catch (error) {
            console.log(error.message);
        }

    }

    async function rename(folder, data) {
        setIsEmpty(false);
        try {
            await http.put(`/folder/${data.id}`, {
                folder: folder,
                status: data.status
            });
            setIsEmpty(true);
        } catch (error) {
            console.log(error)
        }
    }

    async function trashPermenant(idFolder) {
        setIsEmpty(false);
        try {
            await http.delete(`/folder/${idFolder}`);
            setIsEmpty(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        findAll();
        setIsEmpty(false);
    }, [isEmpty]);

    return { listFoldersAndFiles, trash, rename, createdFolderAndFiles, trashPermenant };

}