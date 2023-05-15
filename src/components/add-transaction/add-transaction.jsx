import {useState} from "react";
import Dropdown from "../../ui/dropdown/dropdown.jsx";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {addNewTransaction} from "../../store/slices/balanceSlice.js";
import {changeAccountBalance} from "../../store/slices/accountSlice.js";

function AddTransaction () {
    const [count,setCount] = useState(0);
    const [note, setNote] = useState('');
    const [accountID, setAccountID] = useState(null);
    const [categoryID, setCategoryID] = useState(null);
    const dispatch = useDispatch();
    const selectorUserAccounts = useSelector(state => state.userAccounts.accounts);
    const [accountName, setAccountName] = useState('');
    const [categoryName, setCategoryName] = useState('');

    const categoriesAccounts = selectorUserAccounts.filter(account => account.type === 'group');
    const savingsAccounts = selectorUserAccounts.filter(account => account.type === 'account');

    const randomId = uuidv4();

    const handleInputChange = (e) => {
        setCount(e.target.value);
    }

    const handleInputNoteChange = (e) => {
        setNote(e.target.value);
    }

    const categoryHandler = (e) => {
        setCategoryName(e.target.textContent)
        setCategoryID(e.target.dataset.id);
    }

    const accountsHandler = (e) => {
        setAccountName(e.target.textContent)
        setAccountID(e.target.dataset.id);
    }

    const handleButtonClick = () => {
        const transaction = {
            'count': -parseInt(count),
            'from': accountName,
            'to': categoryName,
            note,
            'id': randomId,
            'transfer': false
        }

        const updatedBalanceInfo = {
            'id': accountID,
            'balance': -parseInt(count)
        }

        const updatedCategoryBalanceInfo = {
            'id': categoryID,
            'balance': parseInt(count)
        }


        dispatch(addNewTransaction(transaction));
        dispatch(changeAccountBalance(updatedBalanceInfo))
        dispatch(changeAccountBalance(updatedCategoryBalanceInfo))
        setCount(0);
        setNote('');
        console.log(categoriesAccounts)
    }

    return (
        <>
            <div className={'flex mb-5'}>
                <div className={'mr-5'}>
                    <Dropdown toggleName={'Accounts'} items={savingsAccounts} customHandler={accountsHandler} />
                </div>
                <div className={'mr-5'}>
                    <Dropdown toggleName={'Groups'} items={categoriesAccounts} customHandler={categoryHandler}/>
                </div>
                <div>
                    <input type="text"
                           id="note"
                           name="note"
                           value={note}
                           maxLength={20}
                           onChange={handleInputNoteChange}
                           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className={'flex mb-5'}>
                <input type="number"
                       id="transaction"
                       name="transaction"
                       min="0"
                       step="any"
                       value={count}
                       onChange={handleInputChange}
                       className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button
                    onClick={handleButtonClick}
                    className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add
                </button>
            </div>
        </>
    )
}

export default AddTransaction;