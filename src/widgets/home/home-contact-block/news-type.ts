import { string } from "zod";

export type NewsModel = {
  date: string;
  fullDescription: string;
  image: string;
  shortDescription: string;
  title: string;
  type: string;
  __v: number;
  _id: string;
};
