import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromCity from './city.reducer'

export interface State {
  cities: fromCity.State;
}

export const reducers: ActionReducerMap<State> = {
  cities: fromCity.cityReducer,
}

export const getCityState = createFeatureSelector<fromCity.State>('cities');
export const getCity = createSelector(getCityState, fromCity.getCity);
