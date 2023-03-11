import { createContext } from "react";
import { ContextProps } from "../types";

export const ConfigContext = createContext({})

export function ConfigProvider(props: ContextProps) {
  return <ConfigContext.Provider value={{a: 2}}>
    {props.children}
  </ConfigContext.Provider>
}