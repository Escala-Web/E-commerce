import { createContext, useState } from "react";
import { useCreateProduct } from "../hooks/Products/useCreateProduct";
import { toast } from "react-toastify";
import { useProducts } from "../hooks/Products/useProducts";
import { formatDate } from "@fullcalendar/core/index.js";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const [varietions, setVarietions] = useState([]);

  console.log(formData)


  const { create } = useProducts();
  const { mutate: createProduct } = create;

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

  function Submit() {

    const images = formData?.images?.map((item) => {
      return {
        id_media: item.id,
        is_main: item.is_image === item.id ? true : false,
        position: ''
      }
    })

    const variations = formData?.variant?.map((item) => ({
      sku: formData?.product?.sku,
      price: formData?.product?.price,
      stock: formData?.product?.stock,
      is_default: false,
      discount: formData?.product?.discount,
      value_variant: item.id,
      pictures: images,
    }));

  
    const jsonCreate = {
      id_category: formData?.id_category,
      products: {
        name: formData?.product?.name,
        description: formData?.product?.description,
        id_brand: formData?.id_brand,
        variations
      },
    };


    console.log(jsonCreate)
    createProduct(jsonCreate)

    
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
        setImages,
        setVarietions,
        varietions
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
