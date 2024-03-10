import styles from './singlePost.module.css';
import Image from 'next/image';
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20308702/pexels-photo-20308702/free-photo-of-a-creek-runs-through-a-forested-area-with-trees.jpeg"
          alt="post Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20308702/pexels-photo-20308702/free-photo-of-a-creek-runs-through-a-forested-area-with-trees.jpeg"
            alt="profile image"
            width={50}
            height={50}
          />
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          provident perspiciatis recusandae beatae reprehenderit dignissimos
          voluptatibus dolorum nulla omnis aspernatur? Necessitatibus voluptatem
          beatae neque hic mollitia aliquam? Suscipit, dolor pariatur.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
