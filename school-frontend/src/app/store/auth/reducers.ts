import { createReducer, on } from '@ngrx/store';
import type { User } from 'src/app/models/user.model';
import { login } from './actions';

export interface AuthState {
  user: User | null | undefined;
  token?: string | null | undefined;
}

export const initialState = {
  user: localStorage.getItem('TOKEN') ? undefined : null,
  token: localStorage.getItem('TOKEN'),
};

export const authReducer = createReducer(initialState);
