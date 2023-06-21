import { UserProps } from './contexts/AuthContext';

export type Home = {
  id: string;
  name: string;
  created_at: string;
  owners: UserProps[];
  guests: UserProps[];
};

// {
// 	"owned": [
// 		{
// 			"id": "97585f21-ecf2-4a7a-8848-8d780a5f678b",
// 			"name": "Casa marcos",
// 			"created_at": "2023-06-19T12:39:06.820Z",
// 			"owners": [
// 				{
// 					"email": "marcos2@gmail.com",
// 					"name": "Marcos 2",
// 					"id": "78bd5899-7b4b-4c6e-ac11-6e196bee9a42"
// 				}
// 			],
// 			"guests": [
// 				{
// 					"email": "luisa2@gmail.com",
// 					"name": "Lulu2",
// 					"id": "f996ed59-9611-4dba-ac1e-dbf9fc41fbba"
// 				}
// 			]
// 		}
// 	],
// 	"guest": []
// }
