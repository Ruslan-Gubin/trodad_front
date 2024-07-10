import { CategoryModel } from "./CategoryType";

export type ProductModel = {
  article: string;
  category: CategoryModel;
  color: string[];
  description: string;
  description1c: string;
  equipment: string[];
  frame: string;
  geometry: string;
  is_active: boolean;
  name: string;
  product1cId: string;
  imagePatch: string;
  size: string;
  __v: number;
  _id: string;
};
