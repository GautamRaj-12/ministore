export const fetchProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Some error occurred", error);
    }
};

export const fetchProductsById = async (productId) => {
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
            throw new Error("Product not found");
        }
        const data = await response.json();
        return data;
    } catch (error) {

    }
}