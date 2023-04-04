import {useState, useCallback} from 'react';
// import { Form } from 'react-router-dom';
function Meet(props) {

    const useToggle =(initialState = false) =>{
        const[state, setState] = useState(initialState)
        const toggle = useCallback(() => setState((state) => !state), []);
        return [state, toggle];
       }
       const[toggle, setToggle]= useToggle();
    return(
        
        <header className = "head">
            { toggle &&(
            <div className ="head">
                <p onClick={setToggle}>{props.text}</p>
            </div>
              )}
        </header>
      
    )
}
export default Meet;