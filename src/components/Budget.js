import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';


const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [editMode, setEditMode] = useState(false);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
    };

    const saveBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
        setEditMode(false);
    };

    return (
        <div className="alert alert-secondary">
            {!editMode ? (
                <>
                    <span>Budget Total: ${budget}</span>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </>
            ) : (
                <>
                    <input 
                        type="number" 
                        value={newBudget} 
                        onChange={handleBudgetChange} 
                    />
                    <button onClick={saveBudget}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </>
            )}
        </div>
    );
};

export default Budget;