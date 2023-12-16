import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';

const EditExpenseForm = ({ id, name: existingName, cost: existingCost, onSave }) => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState(existingName);
    const [cost, setCost] = useState(existingCost);

    const submitEdit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'EDIT_EXPENSE',
            payload: {
                id: id,
                updates: {
                    name: name,
                    cost: parseFloat(cost),
                },
            },
        });
        onSave();
    };

    return (
        <form onSubmit={submitEdit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditExpenseForm;