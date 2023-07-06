import { Action } from '@ngrx/store'

export const CITYNAME = '[City] Cityname';

export class CityName implements Action{
  readonly type = CITYNAME
  constructor(public payload: string){}
}

export type UIActions = CityName
