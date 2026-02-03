import { useRevealOnScroll } from "../../hooks/useRevealOnScroll"
import { useRef } from 'react'

const Experience =()=>{

    const experienceRef = useRef()
    useRevealOnScroll(experienceRef)

    return(
        <section ref={experienceRef} >
            holaaa
        </section>
    )
}

export default Experience