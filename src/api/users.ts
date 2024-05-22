import axios, { AxiosResponse } from "axios";
import { User } from "../shared/types.ts";

export const getUsers = () =>
  axios.get<object, AxiosResponse<User[]>>(
    "https://jsonplaceholder.typicode.com/users"
  );
