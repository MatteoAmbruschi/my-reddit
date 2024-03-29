import { useNavigate } from "react-router-dom";
import styles from './backButton.module.css'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cleanerComments } from "../../features/comments/commentsSlice";
import { useDispatch } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

function BackButton(){
    const navigate = useNavigate();
    const buttonRef = useRef();
    const dispatch = useDispatch()

    const handleBack = (e) => { 
        e.preventDefault();
        navigate(-1);
        dispatch(cleanerComments())
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
    }, [])

    return (
        <button
            ref={buttonRef}
            onClick={handleBack}
            className={styles.backButton}
            >
            Turn Back ↩
      </button>
    )
}

export default BackButton
