import {useSelector} from "react-redux";

function TransactionsHistory () {
    const selectorTransactions = useSelector(state => state.balance.allTransactions)
    const currentDate = new Date().toLocaleDateString();
    const transactionTpl = selectorTransactions.map(transaction =>
        <div key={transaction.id} className={'p-5 border-b-2 mb-3 w-full'}>
            <div className={'flex justify-between w-full'}>
                <span>From: {transaction.from}</span>
                <span className={`${transaction.transfer ? 'text-emerald-400': 'text-rose-600'} font-medium`}>{transaction.count}</span>
            </div>
            <div className={'flex justify-between w-full'}>
                <span>To: {transaction.to}</span>
                <span>{transaction.note}</span>
            </div>
        </div>
    );

    return (
        <div>
            <div className={'h-full flex items-start border-gray-200 border rounded-lg flex-col'}>
                <div className={'border-b-2 w-full flex justify-between align-center p-5 text-medium bg-slate-100'}>
                    History
                    <span>{currentDate}</span>
                </div>
                <div className={'flex flex-col w-full'}>
                    {transactionTpl}
                </div>
            </div>
        </div>
    )
}

export default TransactionsHistory;