import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addAccount} from "../../store/slices/accountSlice.js";
import { v4 as uuidv4 } from 'uuid';
import Dropdown from "../../ui/dropdown/dropdown.jsx";


function CreateAccount() {
    const [accountName, setAccountName] = useState('');
    const [accountBalance, setAccountBalance] = useState(0);
    const [accountCurrency, setAccountCurrency] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch();
    const randomId = uuidv4();
    const currencies = [
        {
            'name': 'USD',
        },
        {
            'name': 'EURO',
        },
        {
            'name': 'RUB',
        }
    ];

    const handleFileUpload = (event) => setSelectedFile(event.target.files[0]);
    const handleInputChange = (event) => setAccountName(event.target.value);
    const handleInputBalanceChange = (event) => setAccountBalance(event.target.value);

    const getCurrency = (e) => {
        const currentCurrency = {
            'name': e.target.textContent,
            'id': e.target.id
        }

        setAccountCurrency(currentCurrency)
    }

    const addAccountHandle = () => {
        if (!accountName.length) return;

        const accountItem = {
            'name': accountName,
            'icon': selectedFile,
            'balance': parseInt(accountBalance),
            'received': 0,
            'currency': accountCurrency,
            'id': randomId,
            'type': 'account'
        }

        dispatch(addAccount(accountItem))

        setAccountName('');
        setSelectedFile(null);
    };

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col text-center w-full mb-12'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                        Add New Account
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Here you can add a wallet with your savings.
                    </p>
                </div>
                <div className='flex w-full flex-col mx-auto items-end'>
                    <div className='relative flex-grow w-full mb-3'>
                        <label className='leading-7 text-sm text-gray-600'>Account Name</label>
                        <input
                            type='text'
                            value={accountName}
                            onChange={handleInputChange}
                            id='accountName'
                            name='accountName'
                            required
                            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        />
                    </div>
                    <div className='relative flex-grow w-full mb-3'>
                        <label htmlFor="groupIcon" className='leading-7 text-sm text-gray-600'>Icon</label>
                        <input
                            type='file'
                            id='accountIcon'
                            name='accountIcon'
                            onChange={handleFileUpload}
                            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        />
                    </div>
                    <div className='relative flex-grow w-full mb-5'>
                        <label className='leading-7 text-sm text-gray-600'>Amount</label>
                        <input
                            type='number'
                            min="0"
                            step="any"
                            value={accountBalance}
                            onChange={handleInputBalanceChange}
                            id='accountAmount'
                            name='accountAmount'
                            required
                            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        />
                    </div>
                    <div className={'flex justify-between items-center w-full'}>
                        <Dropdown toggleName={'USD'} items={currencies} customHandler={getCurrency}/>
                        <button
                            onClick={addAccountHandle}
                            className='text-white rounded-md border border-transparent bg-blue-100 py-2 px-8 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateAccount;