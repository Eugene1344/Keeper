import PopupLayout from "../../ui/popup/popup.jsx";
import {WalletIcon, XMarkIcon} from "@heroicons/react/20/solid/index.js";
import {useDispatch, useSelector} from "react-redux";
import CreateGroup from "../create-group/create-group.jsx";
import {deleteAccount} from "../../store/slices/accountSlice.js";

const BoardGroups = () => {
    const dispatch = useDispatch();
    const selectorGroups = useSelector((state) => state.userAccounts.accounts);

    const handleDeleteAccount = (id) => dispatch(deleteAccount(id));

    const userGroupsItems = selectorGroups.filter(account => account.type === 'group').map((group) =>
        <div key={group.id} id={group.id} className={'flex flex-col my-3 mx-4 group'}>
            <div className={'text-center mb-3'}>{group.name}</div>
            <div className={'bg-pink-300 w-16 h-16 rounded-full flex justify-center align-center p-4 mb-3'}>
                <div>
                    {group.icon ? group.icon : <WalletIcon className={'w-8 fill-white'} />}
                </div>
            </div>
            <div className={'text-center mb-3'}>{group.balance}</div>
            <div
                onClick={() => handleDeleteAccount(group.id)}
                className={'flex opacity-0 ease-in duration-300 align-center cursor-pointer group-hover:opacity-100'}>
                <span className={'text-base'}>Delete</span>
                <XMarkIcon className={'w-5 ml-1'}/>
            </div>
        </div>
    );

    return (
        <div>
            <div className={'flex items-start border-gray-200 border rounded-lg flex-col mb-5'}>
                <div className={'border-b-2 w-full text-center p-5 text-medium bg-slate-100'}>Groups</div>
                <div className={'flex flex-col'}>
                    <div className={'flex flex-wrap p-5'}>
                        {!userGroupsItems.length ? 'No groups' : userGroupsItems}
                    </div>
                    <div className={'px-5 pb-5 flex'}>
                        <PopupLayout ctaName={'Groups'}>
                            {<CreateGroup />}
                        </PopupLayout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardGroups;