import styles from '../styles/Components.module.css'

export default function Gradient() {
    return (
        <div className={styles.gradient}>
            <div className={styles.gradientContainer}>
                <div className={styles.gradientBlur}></div>
                <div className={styles.gradientBlur}></div>
            </div>
        </div>
    )
}