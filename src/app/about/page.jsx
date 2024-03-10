import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="About" width={300} height={200} />
      </div>
    </div>
  );
};

export default About;
