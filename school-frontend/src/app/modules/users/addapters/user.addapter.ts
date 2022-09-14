import {User, IUserEndpoint} from "src/app/models/user.model";

export function createUserAddapted(ed: IUserEndpoint): User{
  return {
    id: ed.id,
    avatar: ed.avatar,
    firstName: ed.firstName,
    lastName: ed.lastName,
    username: ed.username
  }
}
