import { useState } from "react"
import { RiArrowDropDownFill } from "react-icons/ri"

const UserForm = ({setStep}: {setStep: React.Dispatch<React.SetStateAction<number>>}) => {
    const [formData, setFormData] = useState({
        gender: '',
        name_origin: 'No preference',
        meaning: 'No preference',
        name_type: '',
        names_avoid: '',
        version: ''
    })

    const nameOriginOptions = ['No preference', 'English', 'Spanish', 'French', 'German', 'Italian', 'Scandinavian', 'Irish', 'Indian', 'Arabic', 'African', 'Japanese', 'Chinese', 'Korean', 'Russian', 'Greek', 'Hebrew', 'Latin', 'Native American', 'Hawaiian', 'Portugese', 'Dutch', 'Hungarian', 'Polish', 'Turkish', 'Elvish', 'Westerosi', 'Galactic', 'Hogwarts', 'Dystopian', 'Mythological', 'Fantasy', 'Sci-fi', 'Other']

    const meaningOptions = ['No preference', 'Nature', 'Strength', 'Love', 'Virtue', 'Luck', 'Happiness', 'Courage', 'Wisdom', 'Beauty', 'Peace', 'Celestial', 'Mythical', 'Artistic', 'Historic', 'Spiritual', 'Other']

    const updateGender = (gender: string) => {
        setFormData({ ...formData, gender: gender })
    }

    const updateSelectItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const updateNameType = (name_type: string) => {
        setFormData({ ...formData, name_type: name_type })
    }

    const updateNameVersion = (version: string) => {
        setFormData({ ...formData, version: version })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setStep(1)
    }


    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg flex-col gap-6 rounded-lg bg-white text-black  w-full max-w-2xl">
        <p tabIndex={0} className="text-center font-sub pb-6 border-b-[1.8px] border-b-gray-300">
          Unveil the ideal name for your baby with Named by AI, a clever name generator that uses artificial intelligence to find exceptional, meaningful names tailored to your preferences
        </p>
        <form className="w-[100%] flex flex-col gap-8" noValidate onSubmit={handleSubmit}>
          <div tabIndex={0}  className="flex flex-col gap-3 font-sub w-[100%] sm:w-[330px]">
              <h2 className="text-lg font-main">
                What is the baby's gender?
              </h2>
            <div tabIndex={0} className="flex w-[100%] justify-between items-center cursor-pointer" onClick={() => {updateGender("BOY")}} >
              <p>
                Boy
              </p>
              {
                formData.gender === "BOY" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between items-center cursor-pointer" onClick={() => {updateGender("GIRL")}} >
              <p>
                Girl
              </p>
              {
                formData.gender === "GIRL" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between items-center cursor-pointer" onClick={() => {updateGender("UNKNOWN")}}>
              <p>
                Unknown
              </p>
              {
                formData.gender === "UNKNOWN" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                <div className="w-[14px] h-[14px] rounded-full bg-black" />
              </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>
          </div>

          <label htmlFor="name_origin" className="flex flex-col gap-2 w-[100%] sm:w-[330px]" tabIndex={0}>
            <h2 className="text-lg font-main">
              What is your preferred name origin?
            </h2>
            <div className="w-[100%] relative">
              <select tabIndex={0} name="name_origin" id="name_origin" className="cursor-pointer focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] border-[1px] border-gray-400 appearance-none font-sub" value={formData.name_origin} onChange={updateSelectItems}>
                {
                  nameOriginOptions.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))
                }
              </select>
              <RiArrowDropDownFill className="absolute right-2 cursor-pointer top-4 md:top-3 xl:top-2 w-5 h-5 md:w-7 md:h-7 xl:w-9 xl:h-9" />
            </div>
          </label>

          <label htmlFor="meaning" className="flex flex-col gap-2" tabIndex={0}>
            <h2 className="text-lg font-main">
              Would you like the name to have a specific meaning?
            </h2>
            <div className="w-[100%] sm:w-[330px] relative">
              <select tabIndex={0} name="meaning" id="meaning" className="cursor-pointer focus:outline-2 focus:outline-gray-300 py-3 px-4 outline-none rounded-full w-[100%] border border-gray-400 appearance-none font-sub" value={formData.meaning} onChange={updateSelectItems}>
                {
                  meaningOptions.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))
                }
              </select>
              <RiArrowDropDownFill className="absolute right-2 cursor-pointer top-4 md:top-3 xl:top-2 w-5 h-5 md:w-7 md:h-7 xl:w-9 xl:h-9" />
            </div>
          </label>

          <div tabIndex={0}  className="flex flex-col gap-2 font-sub w-[100%]">
              <h2 className="text-lg font-main">
                Do you want a popular or unique name?
              </h2>
            <div tabIndex={0} className="flex w-[100%] justify-between const updateGender = (gender: string)  sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameType("POPULAR")}} >
              <p>
                Popular
              </p>
              {
                formData.name_type === "POPULAR" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between     setFormData({ ...formData, gender: gende sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameType("UNIQUE")}} >
              <p>
                Unique
              </p>
              {
                formData.name_type === "UNIQUE" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameType("NO PREFERENCE")}}>
              <p>
                No preference
              </p>
              {
                formData.name_type === "NO PREFERENCE" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>
          </div>

          <label htmlFor="names_avoid" tabIndex={0}  className="flex flex-col gap-2 font-sub w-[100%]">
            <h2 className="text-lg font-main">
              Are there any names you would like to avoid due to personal reasons or associations?
            </h2>
            <input type="text" name="names_avoid" id="names_avoid" value={formData.names_avoid} onChange={updateInput} placeholder="e.g. Gary, Robyn, Sam" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] sm:w-[330px] border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]"  />
          </label>

          <div tabIndex={0}  className="flex flex-col gap-2 font-sub w-[100%]">
              <h2 className="text-lg font-main">
                Would you like a name with a nickname or shortened version?
              </h2>
            <div tabIndex={0} className="flex w-[100%] justify-between const updateGender = (gender: string)  sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameVersion("Yes")}} >
              <p>
                Yes
              </p>
              {
                formData.version === "Yes" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between     setFormData({ ...formData, gender: gende sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameVersion("No")}} >
              <p>
                No
              </p>
              {
                formData.version === "No" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameVersion("NO PREFERENCE")}}>
              <p>
                No preference
              </p>
              {
                formData.version === "NO PREFERENCE" ? <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border-[1.8px] border-gray-300 rounded-full" />
              }
            </div>
          </div>

          <button type="submit" className="w-fit px-[1rem] bg-[rgb(239,159,188)] rounded-full self-center text-white font-[600] h-[3rem] min-h-[3rem]">
            Generate names
          </button>
        </form>
      </section>
    )
}

export default UserForm