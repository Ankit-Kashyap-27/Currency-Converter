import React from 'react';

const Input = ({
  lable,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "inr",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) => {
  return (
    <>

      <div className="bg-white/80 h-[18vh] mx-5 rounded-xl flex justify-between">

        <div className=' mx-10 flex flex-col justify-evenly'>

          <span className='text-2xl font-semibold text-slate-600'>{lable}</span>

          <input className='w-[15vw] size-10  text-3xl outline-none'
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange &&
              onAmountChange(Number(e.target.value))}
            type="number" placeholder='0' name="" id="" />

        </div>

        <div className=' mx-10  flex flex-col justify-evenly '>

          <span className='text-2xl font-semibold text-slate-600'>Currency Type</span>
          
          <select className='outline-none text-xl font-semibold text-black/70 ' name="" id="" value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}>

            {currencyOptions.map((currency) => {

              return <option key={currency} value={currency}>{currency.toUpperCase()}</option>
            })}

          </select>
        </div>
      </div>

    </>
  );
};

export default Input;

