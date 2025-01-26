import { useState } from "react"
import UserForm from "../components/user_form"
import UserEmail from "../components/user_email"
import Waiting from "../components/waiting"
import GeneratedNames from "../components/generated_names"
import { Link } from "react-router-dom"



const HomePage = () => {
  const [step, setStep] = useState<number>(0) 
  
  const allComponents = [
    <UserForm setStep={setStep} />,
    <UserEmail step={step} setStep={setStep} />,
    <Waiting step={step} setStep={setStep} />,
    <GeneratedNames setStep={setStep} />
  ]


  return (
    <main className="bg-[rgb(239,159,188)] w-[100%] flex p-4 md:p-12 items-center font-main flex-col text-white min-h-[100vh] gap-4">
      <h1 tabIndex={0} className="text-4xl font-[500] text-white">
        Named by AI ✨
      </h1>
      {
        allComponents[step]
      }
      <p className="capitalize font-sub font-semibold">
        🐶 <Link to={'https://www.ainamedmypet.com/?utm_source=named-by-ai'} className="underline">AI named my pet</Link>
      </p>
    </main>
  )
}

export default HomePage
