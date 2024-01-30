import { useNavigate } from "react-router-dom";
import styles from './backButton.module.css'

function BackButton(){
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
      };

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