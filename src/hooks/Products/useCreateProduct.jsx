import { https } from "../../config/https";

async function createProduct(data) {

    try {
        const { data: product } = await https.post('/products/create', {
            id_category: data.id_category,
            products: {
                name: data.name,
                description: data.description,
                id_branch: data.id_branch,
                variations: [
                    {
                        sku: data.sku,
                        price: data.price,
                        stock: data.stock,
                        is_default: true,
                        discount: data.discount,
                        value_variant: data.value_variant
                    }
                ]
            }
        } );
    } catch (error) {
        
    }

}