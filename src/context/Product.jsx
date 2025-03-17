import { createContext, useState } from "react";
import { useCreateProduct } from "../hooks/Products/useCreateProduct";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    id_category: "",
    name: "",
    description: "",
    id_branch: "",
    variations: [],
  });

  const { mutate: createProduct } = useCreateProduct();

  const [images, setImages] = useState([])

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const addVariation = (variation) => {
    setFormData((prevState) => ({
      ...prevState,
      variations: [
        ...prevState.variations,
        {
          ...variation,
          pictures: images.pictures
        },
      ],
    }));
  };

  const updateVariation = (index, field, value) => {
    const updatedVariations = [...formData.variations];
    updatedVariations[index] = {
      ...updatedVariations[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      variations: updatedVariations,
    });
  };


  function Submit(event) {
    event.preventDefault();
    createProduct({
      id_category: Number(formData.id_category),
      products: {
        name: formData.name,
        description: 'Descricao Teste',
        id_branch: Number(formData.id_branch),
        variations: formData.variations
      }
    })

    
  }

  return (
    <ProductContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        Submit,
        addVariation,
        updateVariation,
        setImages
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
