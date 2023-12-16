import React, { useContext, useState } from 'react'; 
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './AppContext';
import EditExpenseForm from './EditExpenseForm';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {!isEditing ? (
                <>
                    {props.name}
                    <div>
                        <span className='badge badge-primary badge-pill mr-3'>£{props.cost}</span>
                        <TiDelete size='1.5em' onClick={handleDeleteExpense} />
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                </>
            ) : (
                <EditExpenseForm
                    id={props.id}
                    name={props.name}
                    cost={props.cost}
                    onSave={() => setIsEditing(false)}
                />
            )}
        </li>
    );
};

export default ExpenseItem;