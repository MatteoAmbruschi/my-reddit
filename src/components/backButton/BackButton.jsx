import { useNavigate } from "react-router-dom";
import styles from './backButton.module.css'
/* import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger); */

function BackButton(){
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
      };

/*       gsap.to('backButton', {
        scrollTrigger: {
        trigger: 'backButton',
        start: 'top 80%',
        end: 'top 30%',
        markers: true
        }
      }) */

    return (
        <button
            onClick={() => handleBack()}
            className={styles.backButton}
            >
            Turn Back ↩
      </button>
    )
}

export default BackButton