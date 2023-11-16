import { UserType } from "@/types";

export const getProduct = async (category: string | null = null) => {
  try {
    const baseURL: string | any = process.env.api;
    const url = category ? `${baseURL}?category=${category}` : baseURL;

    const response = await fetch(baseURL);

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
      "http://localhost/Stocker/backend/get_category.php"
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

// export const isAuth = async (user: UserType) => {
//   try {
//     const url = ''
//     const response = await fetch(url);

//     if (!response.ok) {
//       // Handle non-2xx responses
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error: any) {
//     console.error("Error:", error.message);
//     throw error; // Propagate the error for further handling, if needed
//   }
// };
