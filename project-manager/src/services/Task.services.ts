import { TaskInterface } from "../types/TaskInterface";
import { Baseurl_ } from "./baseurl";

export const postTask = async (param: TaskInterface) => {
  try {
    const response = await fetch(`${Baseurl_}/tasks`, {
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
export const getTasks = async (id: string) => {
  try {
    const response = await fetch(`${Baseurl_}/tasks?userId=${id}`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
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
