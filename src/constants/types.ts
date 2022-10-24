import { UseFormRegisterReturn } from 'react-hook-form';

export type Register = (name: string, RegisterOptions?) => UseFormRegisterReturn;

export type Comment = {
  id: number | string;
  authorPhoto: string;
  authorName: string;
  context: string;
  date: string | Date;
};

export type Post = {
  id: number | string;
  authorName: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  createdAt: string | Date;
  comments: Comment[];
};
