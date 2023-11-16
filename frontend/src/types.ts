export type ProductType = {
  id: number;
  name: string;
  image_url: string;
  price: number;
  category: string;
  quantity: number;
  min_stock_quantity: number;
};

export type UserType = {
  id?: number;
  userName: string;
  passowrd: string;
  error?: string | number;
};

export type CategoryType = {
  category?: string;
  error?: string;
};
