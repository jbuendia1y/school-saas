import { Post } from '../models/post.model';
import { users } from './users';

export const posts: Post[] = [
  {
    id: 'MY_POST_ID',
    title: 'MY_POST_TITLE',
    content: 'MY_POST_CONTENT',
    createdBy: users[0],
  },
  {
    id: 'CUSTOM_POST_ID',
    title: 'Creando un post',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui neque dolor, fuga vitae dolorum tenetur magni temporibus iure voluptatibus. At sit dicta aliquid expedita, blanditiis dolorem obcaecati dolore tempora.',
    createdBy: users[0],
  },
];
