import { api } from "../../../lib/api"

export const getOrders = async () => {

    const { data } = await api.get('/order/1', { requiresAuth: true });

    return data;

}