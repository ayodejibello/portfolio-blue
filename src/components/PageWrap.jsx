// 
import { ModeContext } from "../Context/ModeProvider";
import { useContext } from "react";
const PageWrap = ({ children }) => {
    const { mode } = useContext(ModeContext)
    return <div className={`${mode == "light"
        ? "bg-white text-neutral-950"
        : "bg-neutral-950 text-neutral-50"
        }`}>{children}</div>
}
export default PageWrap