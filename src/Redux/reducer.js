import { USERM } from "./actions";
import { ORDERM } from "./actions";
import { isAuth} from "./actions";
const init = { usersM: [], ordersM: [], isLoggedIn: false };

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USERM: return {...store,usersM:[...payload]}
    case ORDERM: return {...store,ordersM:[...payload]}
    case isAuth: return {...store,isLoggedIn:payload}
    default:
      return store;
  }
};
