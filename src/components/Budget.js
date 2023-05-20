import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input className="col-3" type="number" step="10" max="20000" value={budget} onChange={(e) => dispatch({type: "SET_BUDGET", payload: e.target.value})} />
        </div>
    );
};
export default Budget;