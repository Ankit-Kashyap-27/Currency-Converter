import { useState } from 'react'
import Input from './components/Input'
import './App.css'
import useCurrencyinfo from './hooks/useCurrencyinfo';


function App() {
  const [amount, setamount] = useState();
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState('inr');
  const [convertedamount, setconvertedamount] = useState(0);

  const currencyinfo = useCurrencyinfo(From)

  const options = Object.keys(currencyinfo);


  const swap = () => {
    setFrom(To);
    setTo(From);
    setconvertedamount(amount);
    setamount(convertedamount);

  }

  const convert = () => {
    setconvertedamount(amount * currencyinfo[To])

  }

  return (
    <>
      <div className={`flex h-screen items-center justify-center `}>
        <div className="h-[60vh] w-[50vw] flex flex-col justify-evenly border-2 border-white"
          style={{
            backgroundColor: "rgba(108, 122, 137, 0.7)", // translucent background
            backdropFilter: "blur(5px)", // blur effect for better aesthetics
            borderRadius: "10px", // optional: rounded corners
          }}
        >

          <Input lable={"From"}
          amount={amount}
          currencyOptions={options} 
          onCurrencyChange={(currency)=>setFrom(currency)}
          selectCurrency={From}
          onAmountChange={(amount)=>setamount(amount)}
          
          />

          <div className=' absolute'>
            <button className='relative left-[20.5vw] bottom-[7.5vh] rounded-2xl  bg-blue-400 h-[10vh] w-[8vw] text-xl font-semibold text-white border-2' onClick={swap}>SWAP</button>
          </div>

          <Input lable={"To"}
          amount={convertedamount}
          currencyOptions={options} 
          onCurrencyChange={(currency)=>setTo(currency)}
          selectCurrency={To} 
          amountDisable={true}
          />

          <button className='bg-blue-500 text-3xl font-semibold  rounded-xl mx-5 h-[10vh] text-slate-200 border-2 border-slate-400 ' onClick={convert}>Convert {From.toUpperCase()} to {To.toUpperCase()}</button>
        </div>
      </div>



    </>
  )
}

export default App
