import {useDispatch} from "react-redux";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {addAccount} from "../../store/slices/accountSlice.js";


function CreateIncome() {
    const [accountName, setAccountName] = useState('');
    const [accountBalance, setAccountBalance] = useState(0);
    const dispatch = useDispatch();
    const randomId = uuidv4();


    const handleInputChange = (event) => setAccountName(event.target.value);
    const handleInputBalanceChange = (event) => setAccountBalance(event.target.value);

    const addAccountHandle = () => {
        if (!accountName.length) return;
        const accountItem = {
            'name': accountName,
            'icon': null,
            'balance': accountBalance,
            'currency': null,
            'id': randomId,
            'type': 'income',
            'received': 0
        }

        dispatch(addAccount(accountItem))

        setAccountName('');
    };

    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col text-center w-full mb-12'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                        Add New Income
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Here you can add a source of your income.
                    </p>
                </div>
                <div className='flex w-full flex-col mx-auto items-end'>
                    <div className='relative flex-grow w-full mb-3'>
                        <label className='leading-7 text-sm text-gray-600'>Income Source Name</label>
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
                    <div className='relative flex-grow w-full mb-5'>
                        <label className='leading-7 text-sm text-gray-600'>Planning to receive per month</label>
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

export default CreateIncome;