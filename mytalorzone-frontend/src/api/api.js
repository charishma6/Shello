import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with the backend's hosted URL

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

export const fetchProductDetails = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
};
