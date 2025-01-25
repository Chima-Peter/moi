import { useEffect, useState } from "react"
import { isAlpha, isEmpty } from "validator";
import isEmail from "validator/lib/isEmail";

interface UserEmailProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const UserEmail = ({ step, setStep }: UserEmailProps) => {
    const [formData, setFormData] = useState({
        first_name: '',
        email: ''
    })

    const [error, setError] = useState(false)

    const [delay, setDelay] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDelay(true)
        }, 10000)
    }, [step])

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const moveToNextStep = () => {
        setStep(2)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!isAlpha(formData.first_name) || !isEmail(formData.email)) {
            setError(true)
        } else {
            setStep(2)
        }
    }


    return (
        <section className="flex items-center py-8 px-6 flex-col gap-10 rounded-lg bg-white text-black w-[90%] md:max-w-[42rem] min-h-[400px]">
            <p className="font-sub">
                While we search, signup to keep in the loop on all things baby names!
            </p>
            <form onSubmit={handleSubmit} noValidate className="w-[100%] flex flex-col gap-4">
                <div className="flex flex-col md:flex-row w-[100%] md:items-start justify-between gap-8 md:gap-0">
                    <div className="w-[100%] md:w-[80%] flex flex-col md:flex-row justify-normal md:justify-between gap-3 md:gap-0">
                        <label className="w-[100%] flex flex-col gap-2 md:w-[48%]" htmlFor="first_name">
                            First Name
                            <input onChange={updateInput} placeholder="Your first name" type="text" name="first_name" id="first_name" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]" />
                        </label>
                        <label className="w-[100%] flex flex-col gap-2 md:w-[48%]" htmlFor="email">
                            Email
                            <input onChange={updateInput} placeholder="Your last name" type="email" name="email" id="email" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]" />
                        </label>
                    </div>
                    <button type="submit" className="w-[100%] md:w-fit px-8 py-3 bg-cyan-700 rounded-full text-black self-end">
                        Save
                    </button>
                </div>
                {
                    error && <p className="text-sm text-red-700 font-sub self-center">
                        First name and email fields are required!
                    </p>
                }
            </form>
            {
                delay ? 
                <button className="text-[16px] xl:text-[18px] outline-none self-center w-[100%] text-center text-blue-500" onClick={moveToNextStep}>
                    No thanks, show me your names! </button>
                    : 
                <div className="flex items-center gap-1 w-[100%] self-center justify-center outline-none" >
                    <p className="text-[16px] xl:text-[18px] text-blue-500">
                        Searching the galaxy of baby names, just a moment! 
                    </p>
                    <p className="inline animate-bounce">
                        ✨👶🌟
                    </p>
                </div>
            }
        </section>
    )
}

export default UserEmail