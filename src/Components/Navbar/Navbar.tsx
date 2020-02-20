import React, { useState } from 'react';
interface State {
  amount: number;
}

export const Navbar: React.FC = () => {
  const [state, setState] = useState<State>({ amount: 0 });

  return (
    <div>
      <button
        className="btn"
        onClick={() => setState({ amount: state.amount + 1 })}
      >
        Click me
      </button>
      <h1>Lorem ipsum dolor sit. {state.amount.toString()}</h1>
    </div>
  );
};
