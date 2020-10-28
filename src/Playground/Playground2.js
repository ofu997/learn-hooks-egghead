import React, { useState } from "react";

export function Playground() {
  const [state, setState] = useState({
    text: '',
    checked: false,
  });
  // const handleCheckboxToggle = e => 
  //   setState(prevState => ({
  //     checked: !prevState.checked
  //   }));
  const mergeState = partialState =>
    setState(prevState => ({
      ...prevState,
      ...partialState
    }))
  return (
    <section>
      <input 
        type="text" 
        value={state.text} 
        onChange={e => mergeState({ text: e.target.value})} />
      <input
        type="checkbox"
        checked={state.checked}
        onChange={ e => mergeState({ checked: !state.checked}) }
      />
      <ul>
        <li>{state.text}</li>
        <li>{state.checked.toString()}</li>
      </ul>
    </section>
  );
}

export default Playground;