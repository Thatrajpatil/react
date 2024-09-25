import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './Hooks/usecurrencyinfo'


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

 const converted = () => {
  setconvertedAmount(amount * Currencyinfo[to])
 }


 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      converted()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyoptions={options}
                          onCurrencyChange={(currency) => {setAmount(amount)}}
                          selectcurrency={from}    

                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyoptions={options}
                          onCurrencyChange={(currency) => {setto(currency)}}
                          selectcurrency={from}  
                          amountDisable 
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase}  to  {to.toUpperCase}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
                }

export default App
