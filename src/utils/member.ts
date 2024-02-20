import { User } from "@/views/engine";
import { UserInfo } from "@/views/types/User";


export default class Member {
  static user: UserInfo;

  public static getUserInfo = async () => {
    if (!Member.user) {
      const res = await User.getUserInfo();
      Member.user = res.data;
    }
    return Member.user;
  }
}
