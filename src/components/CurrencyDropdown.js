import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <label htmlFor="changeCurrency">Currency</label>
            <select style={{background:"#93e499", color:"white", padding: "5px", border: "1px solid lightgrey", borderRadius: "5px"}} value={currency} onChange={(e) => dispatch({type: "CHG_CURRENCY", payload: e.target.value})} name="changeCurrency">
                <option value="$" style={{color: "black"}}>$ Dollar</option>
                <option value="£" style={{color: "black"}}>£ Pound</option>
                <option value="€" style={{color: "black"}}>€ Euro</option>
                <option value="₹" style={{color: "black"}}>₹ Ruppee</option>
            </select>
        </div>
    );
};
export default CurrencyDropdown;