import PopupLayout from "../../ui/popup/popup.jsx";
import CreateAccount from "../create-account/create-account.jsx";
import {WalletIcon, XMarkIcon} from "@heroicons/react/20/solid/index.js";
import {deleteAccount} from "../../store/slices/accountSlice.js";
import {useDispatch, useSelector} from "react-redux";
import EditAccount from "../edit-account/edit-account.jsx";

const BoardAccounts = () => {
    const selectorAccounts = useSelector((state) => state.userAccounts.accounts);
    const dispatch = useDispatch();
    const handleDeleteAccount = (id) => dispatch(deleteAccount(id));

    const userAccountsItems = selectorAccounts.filter(account => account.type === 'account').map((account) =>
        <div key={account.id} id={account.id} className={'flex flex-col my-3 mx-4 group items-center'}>
            <div className={'text-center mb-3'}>{account.name ? account.name : 'None'}</div>
            <div className={'bg-cyan-500 w-16 h-16 rounded-full flex justify-center align-center p-4 mb-3'}>
                <div>
                    {account.icon ? account.icon : <WalletIcon className={'w-8 fill-white'} />}
                </div>
            </div>
            <div className={'text-center mb-3'}>{account.balance}</div>
            <div
                onClick={() => handleDeleteAccount(account.id)}
                className={'flex opacity-0 ease-in duration-300 align-center cursor-pointer group-hover:opacity-100 text-white rounded-md border border-transparent bg-blue-100 py-2 px-6 mb-3 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'}>
                <span className={'text-base'}>Delete</span>
                <XMarkIcon className={'w-5 ml-1'}/>
            </div>
            <PopupLayout ctaName={'Change'}>
                <EditAccount accountId={account.id}/>
            </PopupLayout>
        </div>
    );

    const totalBalance = selectorAccounts.filter(account => account.type === 'account')
        .reduce((acc,current) => acc + current.balance, 0);

    return (
        <div>
            <div className={'flex items-start border-gray-200 border rounded-lg flex-col mb-5'}>
                <div className={'border-b-2 w-full flex justify-between text-center p-5 text-medium bg-slate-100'}>
                    <div>Accounts</div>
                    <div>Balance: {totalBalance}</div>
                </div>
                <div className={'flex flex-col'}>
                    <div className={'flex flex-wrap p-5'}>
                        {!userAccountsItems.length ? 'No accounts' : userAccountsItems}
                    </div>
                    <div className={'px-5 pb-5 flex'}>
                        <PopupLayout ctaName={'Accounts'}>
                            <CreateAccount />
                        </PopupLayout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardAccounts;