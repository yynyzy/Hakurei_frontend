import { httpRequest } from "@/utils";

export default class Yixiv {
  public static getTags = async () => {
    const res = await httpRequest.get('https://www.vilipix.com/api/v1/search/recommand_tag');
    return res;
  }
}
