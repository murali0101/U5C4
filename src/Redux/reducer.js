import { Logged, USERM } from "./actions";
import { ORDERM } from "./actions";
import { isAuth} from "./actions";
const init = { usersM: [], ordersM: [], isLoggedIn: false,LoggedName:""};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USERM: return {...store,usersM:[...payload]}
    case ORDERM: return {...store,ordersM:[...payload]}
    case isAuth: return {...store,isLoggedIn:payload}
    case Logged: return {...store,LoggedName:payload}
    default:
      return store;
  }
};
