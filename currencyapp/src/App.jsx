import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './Hooks/usecurrencyinfo'
import './App.css'

function App() {
 const [amount , setAmount] = useState(0)
 const [from ,setFrom] = useState("usd")
 const [to , setto ] = useState("inr")
 const [convertedAmount , setconvertedAmount] = useState(0)

 const Currencyinfo = useCurrencyinfo(from)
 const options = Object.keys(Currencyinfo)


 const swap = ()=> {
   setFrom(to)
   setto(from)
   setconvertedAmount(setAmount)
   setAmount(convertedAmount)

 }


  return (
    <>
    
    </>
  )
}

export default App
