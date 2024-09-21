import { ChatMessage } from '@/shared/ui/chat-message';

import { MESSAGE_LIST } from '../const';
import styles from './ChatBlock.module.css';

export const ChatBlock: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {MESSAGE_LIST.map((message, index) => (
          <li key={index}>
            <ChatMessage {...message} />
          </li>
        ))}
      </ul>
    </div>
  );
};
