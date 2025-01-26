interface WaitingProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const Waiting = ({ step, setStep }: WaitingProps) => {
    if (step === 2) {
        setTimeout(() => {
            setStep(3)
        }, 10000)
    }
    return (
        <section className="flex items-center py-8 px-6 flex-col gap-10 rounded-lg bg-white text-black w-[90%] md:max-w-[42rem] min-h-[400px] justify-center">
            <div className="flex items-center gap-1 w-[100%] self-center justify-center outline-none" >
                <p className="text-[16px] xl:text-[18px] text-blue-500">
                    Searching the galaxy of baby names, just a moment! 
                </p>
                <p className="inline animate-bounce">
                    ✨👶🌟
                </p>
            </div>
        </section>
    )
}

export default Waiting