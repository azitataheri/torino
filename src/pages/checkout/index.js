import { useBaskets } from '@/hooks/queries'
import CheckoutPage from '@/components/templates/CheckoutPage'

function Checkout() {
  const {data: basket, isLoading} = useBaskets()
  
  if(isLoading) return <p>loading.......</p>


  return (
    <CheckoutPage data={basket}/>
  )
}

export default Checkout