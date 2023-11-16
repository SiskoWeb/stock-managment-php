const baseURL = process.env.api;
export const getProduct = async () => {
  try {
    const response = await fetch(`${baseURL}get_Products.php`);

    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error:", error.message);
    // throw error; // Propagate the error for further handling, if needed
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(
      `http://localhost/Stocker/backend/get_category.php`
    );

    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error:", error.message);
    // throw error; // Propagate the error for further handling, if needed
  }
};
