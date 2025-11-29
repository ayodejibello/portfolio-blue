import { ToggleLeft } from "lucide-react";
import { createContext, useContext, useState } from "react";

export const ModeContext = createContext();
const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        mode == "light" ? setMode("dark") : setMode("light")
    }
    return (<ModeContext.Provider value={{ mode, toggleMode }}>{children}</ModeContext.Provider>)

}
export default ModeProvider;