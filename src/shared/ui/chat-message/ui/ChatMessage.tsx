import styles from './ChatMessage.module.css';

export interface IMessage {
  title?: string;
  message: string;
  author?: 'user' | 'ai';
}

export const ChatMessage: React.FC<IMessage> = ({
  title,
  message,
  author = 'user',
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[author]}`}>
      <div className={styles.iconWrapper}></div>
      <div className={styles.textWrapper}>
        {author === 'ai' && <p className={styles.title}>{title}</p>}
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};
