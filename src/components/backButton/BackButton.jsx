import { useNavigate } from "react-router-dom";
import styles from './backButton.module.css'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function BackButton(){
    const navigate = useNavigate();
    const buttonRef = useRef();

    const handleBack = () => {
        navigate(-1);
      };

      useGSAP(() => {
        gsap.to(buttonRef.current, {
          height: 50,
          width: 150,
          fontSize: 17,
          borderRadius: 8,
          scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 10%',
          end: 'bottom -20%',
          markers: false,
          scrub: true,
          }
        })
    }, [/* buttonRef */])

    return (
        <button
            ref={buttonRef}
            onClick={() => handleBack()}
            className={styles.backButton}
            >
            Turn Back ↩
      </button>
    )
}

export default BackButton