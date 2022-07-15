import React, { createContext, useContext, useReducer } from "react"
import { initialState, reducer, stateInterface } from "./reducer";
  
const AppContext = createContext<{state:stateInterface, dispatch:React.Dispatch<{ type: string; payload: any }>} | null>(null);

export const AppProvider = ({children}:{children: JSX.Element}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if(context === undefined){
    throw new Error("usAppContext must be within an appProvider")
  }

  return context;
}