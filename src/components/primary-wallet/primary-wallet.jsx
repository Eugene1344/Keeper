import Btn from "../../ui/btn/btn.jsx";
import {WalletIcon, XMarkIcon} from "@heroicons/react/20/solid/index.js";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addAccount} from "../../store/slices/accountSlice.js";
import {v4 as uuidv4} from "uuid";

const PrimaryWallet = () => {
    const [count,setCount] = useState(0);
    const dispatch = useDispatch();
    const randomId = uuidv4();

    const handleInputChange = (e) => {
        setCount(e.target.value);
    }

    const handleBtnClick = () => {
        const groupItem = {
            'name': 'Wallet',
            'icon': null,
            'id': randomId,
            'balance': count
        }

        dispatch(addAccount(groupItem))
    }

    return (
        <div>
            <div className={'text-center p-5 border-b-2 text-2xl'}>How much money in your "Wallet"</div>
            <div className={'flex justify-between items-center'}>
                <div className={'flex items-center my-5'}>
                    <div className={'bg-indigo-500 w-12 h-12 rounded-full flex justify-center align-center p-4'}>
                        <div>
                            <WalletIcon className={'w-5 fill-white'} />
                        </div>
                    </div>
                    <div className={'text-center text-xl ml-3'}>Wallet</div>
                </div>
                <input type="number"
                       id="defaultCount"
                       name="defaultCount"
                       min="0"
                       defaultValue={0}
                       step="any"
                       value={count}
                       onChange={handleInputChange}
                       className="w-25 text-right bg-white bg-opacity-50 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <Btn handleClick={handleBtnClick} name={'Add'} classes={'w-full text-center text-white p-4 bg-blue-500 hover:bg-blue-600'}/>
        </div>
    );
};

export default PrimaryWallet;