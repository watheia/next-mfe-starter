import React from 'react';
import { LinkType } from './link.type';

type Res = Record<string, any>;

// export function useLocation<S = H.LocationState>(): H.Location<S>;
export type Location<StateType = Res> = {
  /** Returns the Location object's URL's fragment (includes leading "#" if non-empty). */
  hash: string;
  /* Returns the Location object's URL's path. */
  pathname: string;
  /* Returns the Location object's URL's query (includes leading "?" if non-empty). */
  search: string;

  /* (implementation specific) Returns the state associated with the current history entry */
  state?: StateType;
  /* (implementation specific) Returns the key associated with the current history entry */
  key?: string;
};

export type UseLocation<StateType extends Res = Res> = () => Location<StateType>;
export type UseHistory = () => Res;

export type RouterContextType = {
  /**
   * link implementation.
   */
  Link?: LinkType;

  /**
   * link implementation.
   */
  NavLink?: LinkType;

  /**
   * useLocation implementation.
   */
  useLocation?: () => Location;
};

export const RouterContext = React.createContext<RouterContextType>({});

export const RouterProvider = RouterContext.Provider;
