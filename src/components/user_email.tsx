import { useState } from "react"
import { isAlpha, isEmpty } from "validator";
import isEmail from "validator/lib/isEmail";

interface UserEmailProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const UserEmail = ({ step, setStep }: UserEmailProps) => {
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        first_name_error: '',
        email_error_name: ''
    })

    const [delay, setDelay] = useState(false)

    if (step === 1) {
        setTimeout(() => {
            setDelay(true)
        }, 5000)
    }

    const updateInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.name === "first_name" ? setFormData({ ...formData, first_name_error: "", [event.target.name]: event.target.value }) : setFormData({ ...formData, email_error_name: "", [event.target.name]: event.target.value })
    }

    const updateInputOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.name === "first_name" ? setFormData({ ...formData, first_name_error: "", [event.target.name]: event.target.value }) : setFormData({ ...formData, email_error_name: "", [event.target.name]: event.target.value })
    }

    const moveToNextStep = () => {
        setStep(2)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const errors: {
          first_name_error?: string;
          email_error_name?: string;
        } = {};
      
        // Check if `first_name` is empty
        if (isEmpty(formData.first_name)) {
          errors.first_name_error = "First name is required";
        } else if (!isAlpha(formData.first_name)) {
          // Check if `first_name` contains only letters
          errors.first_name_error = "First name should be letters only";
        }
      
        // Check if `email` is valid
        if (isEmpty(formData.email)) {
          errors.email_error_name = "Email is required";
        } else if (!isEmail(formData.email)) {
          errors.email_error_name = "Enter a valid email address";
        }
      
        // If there are errors, update the state
        if (Object.keys(errors).length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            ...errors,
          }));
          return;
        }
      
        // Proceed to the next step if no errors
        setStep(2);
      };
      


    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg flex-col gap-10 rounded-lg bg-white text-black  w-full max-w-2xl min-h-[400px]">
            <p className="font-sub">
                While we search, signup to keep in the loop on all things baby names!
            </p>
            <form onSubmit={handleSubmit} noValidate className="w-[100%] flex flex-col gap-4">
                <div className="flex flex-col md:flex-row w-[100%] md:items-start justify-between gap-8 md:gap-0">
                    <div className="w-[100%] md:w-[80%] flex flex-col md:flex-row justify-normal md:justify-between gap-3 md:gap-0">
                        <label className="max-w-xs flex flex-col gap-2 font-sub font-[600] text-[14px]" htmlFor="first_name">
                            First Name
                            <input onChange={updateInputOnChange} onFocus={updateInputOnFocus} placeholder="Your first name" type="text" name="first_name" id="first_name" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]" />
                        </label>
                        <label className="max-w-xs flex flex-col gap-2 font-sub font-[600] text-[14px]" htmlFor="email">
                            Email
                            <input onChange={updateInputOnChange} onFocus={updateInputOnFocus} placeholder="Your last name" type="email" name="email" id="email" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]" />
                        </label>
                    </div>
                    <button type="submit" className="w-fit px-[1rem] h-[3rem] bg-cyan-500 rounded-full text-black md:self-end">
                        Save
                    </button>
                </div>
                <div className="flex flex-col gap-1 w-[100%] self-start justify-start">
                    <p className="text-sm text-red-700 font-sub">
                        {formData.first_name_error}
                    </p>
                    <p className="text-sm text-red-700 font-sub">
                        {formData.email_error_name}
                    </p>
                </div>
            </form>
            {
                delay ? 
                <button className="text-[16px] xl:text-[18px] outline-none self-center w-[100%] text-center text-blue-500" onClick={moveToNextStep}>
                    No thanks, show me your names! </button>
                    : 
                    <p className="text-blue-500">
                        Searching the galaxy of baby names, just a moment! 
                        <span className="inline-block animate-bounce">✨👶🌟</span>
                    </p>
            }
        </section>
    )
}

export default UserEmail