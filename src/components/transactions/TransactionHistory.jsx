import {table, thead, th, td, tr} from './transactions.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <div>
            <table className={table}>
                <thead className={thead}>
                    <tr>
                        <th className={th}>Type</th>
                        <th className={th}>Amount</th>
                        <th className={th}>Currency</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(({id, type, amount, currency}) => {
                    return (
                            <tr className={tr} key={id}>
                                <td className={td}>{toUpperCase(type)}</td>
                                <td className={td}>{amount}</td>
                                <td className={td}>{currency}</td>
                            </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};

function toUpperCase(string) {
    return string.toUpperCase();
}

export default TransactionHistory;