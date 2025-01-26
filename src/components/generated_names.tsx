import { BsArrowRepeat } from "react-icons/bs";
import { Link } from "react-router-dom";
import AnimatedList from "./animate_list";
import { GoPlusCircle } from "react-icons/go";

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
        <section className="flex items-center py-8 px-4 md:px-10 flex-col gap-6 rounded-lg bg-white text-black w-[90%] md:max-w-[42rem] min-h-[400px]">
            <h1 className="text-[16px] xl:text-[18px] text-black">
                Behold! Enchanting baby names we've found just for you:
            </h1>
            <AnimatedList items={names} />
            <div className="flex gap-3 sm:gap-6 w-[100%] flex-col sm:flex-row justify-normal sm:justify-center">
                <button  className="w-[100%] sm:w-fit px-5 py-3 bg-[rgb(239,159,188)] rounded-full justify-center text-white  flex gap-1 items-center">
                    <GoPlusCircle className="w-5 h-5 text-white" />
                    Show me more
                </button>
                <button onClick={backToForm}  className="w-[100%] sm:w-fit px-5 py-3 bg-[rgb(239,159,188)] rounded-full justify-center text-white flex gap-1 items-center">
                    <BsArrowRepeat className="w-5 h-5 text-white" />
                    Start over
                </button>
            </div>
            <p className="text-[14px] lg:text-[16px] xl:text-[18px] font-sub">
                Did you also know we have an app to pick a <Link to={''} className="underline"> name for your pet</Link>🐶
            </p>
        </section>
    )
}

export default GeneratedNames