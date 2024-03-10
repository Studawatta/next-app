import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20308702/pexels-photo-20308702/free-photo-of-a-creek-runs-through-a-forested-area-with-trees.jpeg"
            alt="post image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quam, vitae iure culpa ducimus libero facilis. Ea doloremque
          blanditiis adipisci natus voluptate magnam fugiat, libero unde dolorum
          temporibus! Similique, libero.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
