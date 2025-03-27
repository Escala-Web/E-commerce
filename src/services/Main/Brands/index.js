import { api } from '../../../lib/api'

export const getAllBreads = async () => {

    const { data } = await api.get('/brands');
    return data;
}   


export const createBrand = async (data) => {

    const { data: brands } = await api.post("/brands/create", data, {requiresAuth: true});
    return brands;

}