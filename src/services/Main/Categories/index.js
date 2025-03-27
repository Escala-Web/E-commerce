import { api } from "../../../lib/api"

export const getCategories = async () => {
    const parentPromise =  api.get('/categories/get-parents');
    const childrenPromise =  api.get('/categories/get-categories');
  
    const [parentResponse, childrenResponse] = await Promise.all([parentPromise, childrenPromise]);
  
    return {
      parents: parentResponse.data.content,
      children: childrenResponse.data.content
    };
}

export const createProduct = async (data) => {

  console.log(data)

  const { data: category } = await api.post('/categories/create', data, {requiresAuth: true});
  return category;

}