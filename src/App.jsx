
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [isPrincipleInvalid,setIsPrincipleInvalid]=useState(false)
  const [isRateInvalid,setIsRateInvalid]=useState(false)
  const [isYearInvalid,setIsYearInvalid]=useState(false)


  const isInputInvalid=(inputTag)=>{
   console.log(inputTag);
   const {name,value}=inputTag
   console.log(name,value);
   console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
   console.log(!!value.match(/^\d*.?\d+$/));
   if(name=='principle'){
    setPrinciple(value);
    !!value.match(/^\d*.?\d+$/)?setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)
   }
   else if(name=='rate'){
    setRate(value);
    !!value.match(/^\d*.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
   }
   else if(name=='year'){
    setYear(value);
    !!value.match(/^\d*.?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
   }

   }
   

   const handleCalculate=()=>{
    if(principle&&rate&&year){
      setInterest(principle*rate*year/100)
    }
    else{
      alert("Please fill the form completely")
    }
   }

   const handleReset=()=>{
    setInterest(0);
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    
   }
   
   
   

   
  


  return (
    <>
     <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{height:'600px',width:'550px',fontFamily: "Noto Serif"}}className="container bg-warning rounded p-5">
        <h3 className=''>Simple Interest Calculator</h3>
        <p>Calculate your returns in seconds!!!</p>
        <div className='d-flex flex-column shadow p-2 justify-content-center align-items-center bg-light m-3 rounded-pill'>
          <h1>₹{interest}</h1>
          <p style={{fontWeight:'bolder'}}>Total Simple Interest</p>
        </div>
        <form className='mt-3'>
        <div className=' mb-2 '>
        <TextField className='w-100' value={principle||""} name="principle" onChange={e=>isInputInvalid(e.target)} id="outlined-basic" label="Principle-Amount(₹)" variant="outlined" />
        </div>
       { isPrincipleInvalid&&
        <div className="mb-2 text-danger fw-bold">
          *Invalid Principle Amount
        </div>}
        <div className='mb-2'>
        <TextField className='w-100' name='rate' value={rate||""} onChange={e=>isInputInvalid(e.target)} id="outlined-basic" label="Rate of Interest(%)" variant="outlined" />
        </div> 
        {isRateInvalid&&
          <div className="mb-2 text-danger fw-bold">           
          *Invalid Interest Rate
        </div>}
         <div className='mb-2'>
        <TextField className='w-100' name='year' value={year||""} onChange={e=>isInputInvalid(e.target)} id="outlined-basic" label="Time Period (Yr" variant="outlined" />
        </div>
       { 
        isYearInvalid&&
        <div className="mb-2 text-danger fw-bold">
          *Invalid Time Period
        </div>}
        <div className='text-center mt-5'>
        <Stack spacing={2} direction={'row'}>
        <Button disabled={isPrincipleInvalid||isRateInvalid||isYearInvalid} className='bg-dark' style={{width:'50%', height:'40px'}} variant="contained" onClick={handleCalculate}>CALCULATE</Button>
        <Button className=' border-dark text-black' style={{width:'50%', height:'40px'}} variant="outlined" onClick={handleReset}>RESET</Button>
          </Stack>
        </div>
        </form>
        
      </div>
     </div>
    </>
  )
}

export default App
