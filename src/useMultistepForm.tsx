import { ReactElement, useState } from "react";


export function useMultistepForm(steps: ReactElement[]) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function next() {
        setCurrentIndex(i => {
            if(i >= steps.length -1) return i;
            return i + 1;
        })
    }

    function back() {
        setCurrentIndex(i => {
            if(i <= 0) return i;
            return i - 1;
        } )

    }

    function gotTo(index: number) {
        setCurrentIndex(index)
    }

    return {
        currentIndex,
        step: steps[currentIndex],
        steps,
        gotTo,
        next,
        back,
        isFirstStep: currentIndex === 0,
        isLastStep: currentIndex === steps.length - 1,
    }
}