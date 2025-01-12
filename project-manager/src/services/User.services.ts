import { Baseurl_ } from "./baseurl";

export interface UserInterface {
  id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  datecreated?: Date;
  email: string;
  password: string;
  role?: string;
  social?: {
    linkedin: string;
    instagran: string;
    x: string;
  };
}

export const postUser = async (param: UserInterface) => {
  try {
    const response = await fetch(`${Baseurl_}/users`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    });

    if (!response.ok) {
      console.log(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const GetUser = async (id: string) => {
  try {
    const response = await fetch(`${Baseurl_}/users/${id}`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os dados do usuário");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
