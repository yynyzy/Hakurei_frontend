import { request } from "@/utils";
import { AuthRequest, LoginResponse, UserInfo } from "../types/User";

export default class User {
  public static login = async (params: AuthRequest) => {
    const res = await request.post<LoginResponse>('/user/login', params);
    return res;
  }

  public static register = async (params: AuthRequest) => {
    const res = await request.post<LoginResponse>('/user/register', params);
    return res;
  }

  // public static getUserInfo = async (params: any) => {
  //   const res = await request.get<UserInfo>('/user/info', {
  //     params,
  //   });
  //   return res;
  // }
}
