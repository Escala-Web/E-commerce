import { api } from "../../../lib/api"

export const getUsers = async () => {

    const { data } = await api.get('/user/1', {requiresAuth: true})
    return data;

}