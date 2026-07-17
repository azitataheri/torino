import {useUserTransactions} from '@/hooks/queries'

function TransactionsSection() {
  const {data: usertransactions} =  useUserTransactions()
  console.log(usertransactions);
  
  return (
    <div className="border border-gray-300 p-5 rounded-xl">
    </div>
  )
}

export default TransactionsSection