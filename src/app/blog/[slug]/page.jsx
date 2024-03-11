import PostUser from '@/components/postUser/postUser';
import styles from './singlePost.module.css';
import Image from 'next/image';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image src={post.img} alt="post Image" fill className={styles.img} />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
