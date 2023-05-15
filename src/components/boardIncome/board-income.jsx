import PopupLayout from "../../ui/popup/popup.jsx";
import {WalletIcon, XMarkIcon } from "@heroicons/react/20/solid/index.js";
import {useDispatch, useSelector} from "react-redux";
import EditAccount from "../edit-account/edit-account.jsx";
import CreateIncome from "../create-income/create-income.jsx";
import {deleteAccount} from "../../store/slices/accountSlice.js";

const BoardIncome = () => {
    const selectorIncomes = useSelector((state) => state.userAccounts.accounts);
    const totalBalance = selectorIncomes.filter(account => account.type === 'income')
        .reduce((acc,current) => acc + parseInt(current.balance), 0);
    const totalReceivedBalance = selectorIncomes.filter(account => account.type === 'income')
        .reduce((acc,current) => acc + parseInt(current.received), 0);
    const dispatch = useDispatch();
    const handleDeleteAccount = (id) => dispatch(deleteAccount(id));

    const userIncomesItems = selectorIncomes.filter(account => account.type ==='income').map((income) =>
        <div key={income.id} id={income.id} className={'flex flex-col my-3 mx-4 group items-center'}>
            <div className={'text-center mb-3'}>{income.name ? income.name : 'None'}</div>
            <div className={'bg-indigo-500 w-16 h-16 rounded-full flex justify-center align-center p-4 mb-3'}>
                <div>
                    <WalletIcon className={'w-8 fill-white'} />
                </div>
            </div>
            <div className={'text-center text-indigo-500 text-bold'}>{income.received} </div>
            <div className={'text-center mb-3'}>{income.balance} </div>
            <div
                onClick={() => handleDeleteAccount(income.id)}
                className={'flex opacity-0 ease-in duration-300 align-center cursor-pointer group-hover:opacity-100 text-white rounded-md border border-transparent bg-blue-100 py-2 px-6 mb-3 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'}>
                <span className={'text-base'}>Delete</span>
                <XMarkIcon className={'w-5 ml-1'}/>
            </div>
            <PopupLayout ctaName={'Change'}>
                <EditAccount accountId={income.id}/>
            </PopupLayout>
        </div>
    );

    return (
        <div>
            <div className={'flex items-start border-gray-200 border rounded-lg flex-col mb-5'}>
                <div className={'border-b-2 w-full flex justify-between text-center p-5 text-medium bg-slate-100'}>
                    <div>Income</div>
                    <div className={'flex flex-col'}>Received: <span>{totalReceivedBalance}</span></div>
                    <div className={'flex flex-col'}>Balance: <span>{totalBalance}</span></div>
                </div>
                <div className={'flex flex-col'}>
                    <div className={'flex flex-wrap p-5'}>
                        {!userIncomesItems.length ? 'No source income' : userIncomesItems}
                    </div>
                    <div className={'px-5 pb-5 flex'}>
                        <PopupLayout ctaName={'Add Income'}>
                            <CreateIncome />
                        </PopupLayout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardIncome;