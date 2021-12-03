import ACTION_TYPES from './actionsType';
import axios from 'axios';

export const downloadUser = (data) => {
  return {
    type: ACTION_TYPES.DOWNLOAD_USERS,
    data: data,
  };
};

export const nextUser = (data) => {
  return {
    type: ACTION_TYPES.NEXT_USERS,
    data: data
  };
};

export const prevUser = (data) => {
  return {
    type: ACTION_TYPES.PREV_USERS,
    data: data,
  };
};
