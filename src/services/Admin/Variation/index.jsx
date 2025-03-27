import { api } from "../../../lib/api"


// Inicio de variações

export const createVariation = async (data) => {
    const { data: variation } = await api.post('/variations/create-variation', data, { requiresAuth: true });
    return variation;
}

export const getVariation = async () => {
    const { data: variation } = await api.get('/variations/get-variations', { requiresAuth: true });
    return variation;
}

export const deleteVariation = async (id) => {
    const { data: variation } = await api.delete(`/variations/variation/${id}`, { requiresAuth: true });
    return variation;
}

// Fim de variações

// Inicio Value de variações

export const createValueVariation = async (data) => {
    console.log(data)

    const { data: valueVariant } = await api.post('/variations/create-value', data, { requiresAuth: true });
    return valueVariant;
}

export const getAllValueVariant = async (id) => {
    const { data } = await api.get('/variations/get-values/'+id, { requiresAuth: true });
    return data;
}