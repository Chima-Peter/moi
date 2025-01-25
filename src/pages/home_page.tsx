import { useState } from "react"
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
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
  }


  return (
    <main className="bg-[rgb(239,159,188)] w-[100%] flex py-12 items-center font-main flex-col text-white min-h-[100vh] gap-4">
      <h1 tabIndex={0} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[500] text-white">
        Named by AI ✨
      </h1>
      <section className="flex items-center py-8 px-6 flex-col gap-6 rounded-lg bg-white text-black w-[90%] md:max-w-[42rem]">
        <p tabIndex={0} className="w-[90%] text-[15px] lg:text-[16px] text-center font-sub leading-relaxed pb-6 border-b-[1.8px] border-b-gray-300">
          Unveil the ideal name for your baby with Named by AI, a clever name generator that uses artificial intelligence to find exceptional, meaningful names tailored to your preferences
        </p>
        <form className="w-[90%] flex flex-col gap-10" noValidate onSubmit={handleSubmit}>
          <div tabIndex={0}  className="flex flex-col gap-2 font-sub w-[100%] sm:w-[330px]">
              <h2 className=" text-[16px] lg:text-[18px] font-main">
                What is the baby's gender?
              </h2>
            <div tabIndex={0} className="flex w-[100%] justify-between items-center cursor-pointer" onClick={() => {updateGender("BOY")}} >
              <p>
                Boy
              </p>
              {
                formData.gender === "BOY" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between items-center cursor-pointer" onClick={() => {updateGender("GIRL")}} >
              <p>
                Girl
              </p>
              {
                formData.gender === "GIRL" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between items-center cursor-pointer" onClick={() => {updateGender("UNKNOWN")}}>
              <p>
                Unknown
              </p>
              {
                formData.gender === "UNKNOWN" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10"  />
              }
            </div>
          </div>

          <label htmlFor="name_origin" className="flex flex-col gap-2 w-[100%] sm:w-[330px]" tabIndex={0}>
            <h2 className=" text-[16px] lg:text-[18px] font-main">
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
            <h2 className=" text-[16px] lg:text-[18px] font-main">
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
              <h2 className=" text-[16px] lg:text-[18px] font-main">
                Do you want a popular or unique name?
              </h2>
            <div tabIndex={0} className="flex w-[100%] justify-between const updateGender = (gender: string)  sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameType("POPULAR")}} >
              <p>
                Popular
              </p>
              {
                formData.name_type === "POPULAR" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between     setFormData({ ...formData, gender: gende sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameType("UNIQUE")}} >
              <p>
                Unique
              </p>
              {
                formData.name_type === "UNIQUE" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameType("NO PREFERENCE")}}>
              <p>
                No preference
              </p>
              {
                formData.name_type === "NO PREFERENCE" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10"  />
              }
            </div>
          </div>

          <label htmlFor="names_avoid" tabIndex={0}  className="flex flex-col gap-2 font-sub w-[100%]">
            <h2 className=" text-[16px] lg:text-[18px] font-main">
              Are there any names you would like to avoid due to personal reasons or associations?
            </h2>
            <input type="text" name="names_avoid" id="names_avoid" value={formData.names_avoid} onChange={updateInput} placeholder="e.g. Gary, Robyn, Sam" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] sm:w-[330px] border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]"  />
          </label>

          <div tabIndex={0}  className="flex flex-col gap-2 font-sub w-[100%]">
              <h2 className=" text-[16px] lg:text-[18px] font-main">
                Would you like a name with a nickname or shortened version?
              </h2>
            <div tabIndex={0} className="flex w-[100%] justify-between const updateGender = (gender: string)  sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameVersion("Yes")}} >
              <p>
                Yes
              </p>
              {
                formData.version === "Yes" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between     setFormData({ ...formData, gender: gende sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameVersion("No")}} >
              <p>
                No
              </p>
              {
                formData.version === "No" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between sm:w-[330px] items-center cursor-pointer" onClick={() => {updateNameVersion("NO PREFERENCE")}}>
              <p>
                No preference
              </p>
              {
                formData.version === "NO PREFERENCE" ? <MdRadioButtonChecked className="cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10" /> : <MdRadioButtonUnchecked className="text-gray-300 cursor-pointer w-5 h-5 lg:w-7 lg:h-7 xl:w-10 xl:h-10"  />
              }
            </div>
          </div>

          <button type="submit" className="w-fit px-5 py-3 bg-[rgb(239,159,188)] rounded-full self-center text-white">
            Generate names
          </button>
        </form>
      </section>
    </main>
  )
}

export default HomePage
