import React from 'react';
import { IContext } from '../interfaces/interfaces';

export const contextData = {
  data: 'context mat ego',
};

export const AppContext =
  React.createContext<IContext>({});
