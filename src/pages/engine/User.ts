import { request } from "@/utils";
import { LoginRequest, LoginResponse} from "../types/User";

export default class User {
  public static login = async (params: LoginRequest) => {
    const res = await request.post<LoginResponse>('/login', params);
    return res
  }
}
