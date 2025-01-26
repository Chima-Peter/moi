interface WaitingProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const Waiting = ({ step, setStep }: WaitingProps) => {
    if (step === 2) {
        setTimeout(() => {
            setStep(3)
        }, 5000)
    }
    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg flex-col gap-10 rounded-lg bg-white text-black  w-full max-w-2xl min-h-[400px] justify-center self-center">
            <p className="text-center">
                Searching the galaxy of baby names, just a moment!  <span className="inline-block animate-bounce">✨👶🌟</span>
            </p>
        </section>
    )
}

export default Waiting