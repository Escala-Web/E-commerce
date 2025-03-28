import { api } from '../../../lib/api'

export const findAllFoldersAPI = async () => {
    const { data: folder } = await https.post("/media/get-content-folder", data, { requiresAuth: true });
    return folder;
}

export const createFolderAPI = async (data) => {
    const { data: folder } = await api.post('/media/create-folder', data, { requiresAuth: true });
    return folder;
}