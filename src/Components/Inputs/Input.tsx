import { VscSearch } from "react-icons/vsc";
import "./_Input.scss";

interface ISearch  {
    classSerch: string;
    id: string;
    type: string;
    name: string;
    placeholder: string;
}

function Input({classSerch, id, type, name, placeholder}: ISearch) {
    return(
        <div>
            <label htmlFor="serchInp">
                <input id={id} className={classSerch} type={type} name={name} placeholder={placeholder} />
                <VscSearch className="icon" id="serchInp" />
            </label>
        </div>
    )
};

export default Input;