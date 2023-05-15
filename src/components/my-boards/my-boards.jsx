import AddTransaction from "../add-transaction/add-transaction.jsx";
import TransactionsHistory from "../history/transactions-history.jsx";
import BoardAccounts from "../boardAccounts/board-accounts.jsx";
import BoardGroups from "../boardGroups/board-groups.jsx";
import BoardIncome from "../boardIncome/board-income.jsx";
import Transfer from "../transfer/transfer.jsx";
import {useState} from "react";

function MyBoards() {
    const [isVisible,setIsVisible] = useState('accountTransfer')
    const handleChange = (e) => setIsVisible(e.target.id);

    return (
      <div className='w-full bg-white'>
        <div className={'mb-5 w-full border-b pb-5'}>
            <label htmlFor="accountTransfer" onChange={handleChange} className={'cursor-pointer'}>
                <input type="radio" defaultChecked id="accountTransfer" name="transfer" />
                <span className={'pl-3 text-md'}>Transfer between Accounts</span>
            </label>
            <label htmlFor="categoriesTransfer" onChange={handleChange} className={'ml-5 cursor-pointer'}>
                <input type="radio" id="categoriesTransfer" name="transfer" />
                <span className={'pl-3 text-md'}>Transfer between Categories</span>
            </label>
        </div>
        <div className={'flex w-full'}>
            {isVisible === 'accountTransfer' && <div>
                <Transfer />
            </div>}
            {isVisible === 'categoriesTransfer' && <div>
                <AddTransaction />
            </div>}
        </div>
        <div className={'grid grid-cols-2 gap-4'}>
            <div>
                <BoardIncome />
                <BoardAccounts />
                <BoardGroups />
            </div>
          <TransactionsHistory />
        </div>
      </div>
    );
}

export default MyBoards;
