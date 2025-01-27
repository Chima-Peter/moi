import { Link } from "react-router-dom";
import AnimatedList from "./animate_list";
import { GoPlusCircle } from "react-icons/go";
import { FaRepeat } from "react-icons/fa6";


interface GeneratedNamesProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const GeneratedNames = ({ setStep }: GeneratedNamesProps) => {
    const names = [
        "Avery: A unisex name of English origin meaning 'ruler of the elves,' it has a modern and trendy feel while being timeless.",
        "Quinn: This Irish name means 'wise' or 'intelligent' and is a popular unisex choice that conveys strength and individuality.",
        "Riley: An Irish name meaning 'courageous,' it is playful and friendly, making it a great unisex option for any child.",
        "Jordan: A Hebrew name meaning 'to flow down,' it has been a popular unisex name for decades, evoking a sense of adventure.",
        "Harper: Originally a surname, this English name means 'harp player' and has gained popularity as a charming unisex name.",
        "Skylar: Of Dutch origin, meaning 'scholar,' this name has a fresh and modern vibe, suitable for any child.",
        "Isabella: A beautiful Italian name meaning 'devoted to God,' it has a classic elegance and is widely loved.",
        "Elijah: A strong Hebrew name meaning 'my God is Yahweh,' it has a rich biblical history and conveys a sense of faith and strength.",
        "Mia: A sweet and simple name of Italian origin meaning 'mine,' it is both trendy and timeless, perfect for a little girl.",
        "Leo: A Latin name meaning 'lion,' it symbolizes bravery and strength, making it a powerful choice for a boy."
      ];
      
    const backToForm = () => {
        setStep(0)
    }
    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg font-main flex-col gap-6 rounded-lg bg-[#f8f7ee] text-black w-full max-w-2xl min-h-[400px]">
            <h1 className="text-[18px] text-black self-start font-bold">
                Behold! Enchanting baby names we've found just for you:
            </h1>
            <AnimatedList items={names} />
            <div className="flex gap-3 sm:gap-4 w-[100%] flex-col sm:flex-row justify-center items-center">
                <button  className="w-fit px-[0.75rem] text-[0.875rem] h-[2rem] min-h-[2rem] bg-[#6b6ea5] rounded-full justify-center text-white flex gap-4 items-center font-[600]">
                    <GoPlusCircle className="w-4 h-4 text-white" />
                    Show me more
                </button>
                <button onClick={backToForm}  className="w-fit px-[0.75rem] text-[0.875rem] h-[2rem] min-h-[2rem] bg-[#6b6ea5] rounded-full justify-center text-white  flex gap-4  font-[600] items-center">
                    <FaRepeat className="w-4 h-4 text-white" />
                    Start Over
                </button>
            </div>
        </section>
    )
}

export default GeneratedNames