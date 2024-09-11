export const UPDATE_USER = 'UPDATE_USER';
export const SAVE_USER = 'SAVE_USER';

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  payload: user,
});