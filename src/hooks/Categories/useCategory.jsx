import { useQuery } from "@tanstack/react-query";
import { https } from "../../config/https";

async function fetchCategories() {
  const parentPromise =  https.get('/categories/get-parents');
  const childrenPromise =  https.get('/categories/get-categories');

  const [parentResponse, childrenResponse] = await Promise.all([parentPromise, childrenPromise]);

  return {
    parents: parentResponse.data.content,
    children: childrenResponse.data.content
  };
}

export const useCategoryAll = () => {
  const { data, error, isLoading } = useQuery(['categoryAll'], fetchCategories);

  const categories = () => {
    if (!data) return [];

    const { parents, children } = data;

    return parents?.map((parent) => {
      const childrenForParent = children.filter(child => child.parent_category_id === parent.id_category);

      return childrenForParent.length > 0 ? { ...parent, children: childrenForParent } : parent;
    });
  };

  return {
    categories: categories(),
    isLoading,
    error
  };
};
