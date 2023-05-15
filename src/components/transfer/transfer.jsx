import Dropdown from "../../ui/dropdown/dropdown.jsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {addNewTransaction} from "../../store/slices/balanceSlice.js";
import {changeAccountBalance, changeIncomeReceivedBalance} from "../../store/slices/accountSlice.js";

const Transfer = () => {
    const [count,setCount] = useState(0);
    const [note, setNote] = useState('');
    const [accountID, setAccountID] = useState(null);
    const [incomeID, setIncomeID] = useState(null);
    const [accountName, setAccountName] = useState('');
    const [incomeName, setIncomeName] = useState('');

    const dispatch = useDispatch();

    const selectorUserAccounts = useSelector(state => state.userAccounts.accounts);
    const incomeAccounts = selectorUserAccounts.filter(account => account.type === 'income');
    const savingsAccounts = selectorUserAccounts.filter(account => account.type === 'account');

    const randomId = uuidv4();

    const handleInputChange = (e) => {
        setCount(e.target.value);
    }

    const handleInputNoteChange = (e) => {
        setNote(e.target.value);
    }

    const incomeHandler = (e) => {
        setIncomeName(e.target.textContent)
        setIncomeID(e.target.dataset.id);
    }

    const accountsHandler = (e) => {
        setAccountName(e.target.textContent)
        setAccountID(e.target.dataset.id);
    }

    const handleButtonClick = () => {
        const transaction = {
            'count': parseInt(count),
            'from': incomeName,
            'to': accountName,
            note,
            'id': randomId,
            'transfer': true,
        }

        const updatedBalanceInfo = {
            'id': accountID,
            'balance': parseInt(count)
        }

        const updatedReceivedInfo = {
            'id': incomeID,
            'received': parseInt(count)
        }

        dispatch(addNewTransaction(transaction));
        dispatch(changeAccountBalance(updatedBalanceInfo))
        dispatch(changeIncomeReceivedBalance(updatedReceivedInfo))
        setCount(0);
        setNote('');

        console.log(transaction)
        console.log(incomeAccounts)
    }

    return (
        <div className={'flex w-full mb-5'}>
            <div className={'flex'}>
                <div className={'mr-5'}>
                    <Dropdown toggleName={'Income'} items={incomeAccounts} customHandler={incomeHandler}/>
                </div>
                <div className={'mr-5'}>
                    <Dropdown toggleName={'Accounts'} items={savingsAccounts} customHandler={accountsHandler} />
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
            <div className={'flex ml-5'}>
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
        </div>
    );
};

export default Transfer;