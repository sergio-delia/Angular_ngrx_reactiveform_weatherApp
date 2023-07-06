import { CITYNAME, UIActions } from "./city.action";

export interface State {
  city: string;
}

const initialState: State = {
  city: 'vuoto'
}

export function cityReducer(state = initialState, action: UIActions){
  console.log(state);

  switch(action.type){
    case CITYNAME:
      return {
        city: action.payload
      }

    default:
      return state;
  }
}

export const getCity = (state: State) => state.city
