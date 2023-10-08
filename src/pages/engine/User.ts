import { request } from "@/utils";
import { LoginRequest, LoginResponse, UserInfo } from "../interface/User";

export default class User {
  public static login = async (params: LoginRequest) => {
    const res = await request.post<LoginResponse>('/user/login', params);
    return res
  }

  public static getUserInfo = async (params: any) => {
    const res = await request.get<UserInfo>('/user/info', {
      params,
    });
    return res
  }
}
