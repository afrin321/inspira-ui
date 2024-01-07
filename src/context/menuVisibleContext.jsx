// MenuVisibleContext.js
import React from 'react';
import { createContext, useContext } from 'react';

const MenuVisibleContext = createContext();

const MenuVisibleProvider = ({ children }) => {
    const toggleMenuVisible = () => {
      return !MenuVisibleContext
    };
  
    return (
      <MenuVisibleContext.Provider value={{ toggleMenuVisible }}>
        {children}
      </MenuVisibleContext.Provider>
    );
};

const useMenuVisibleContext = () => {
    return useContext(MenuVisibleContext);
};

export { MenuVisibleProvider, useMenuVisibleContext };
