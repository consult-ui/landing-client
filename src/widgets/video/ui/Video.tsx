import BlockHeader from '@/shared/ui/block-header';

import styles from './Video.module.scss';

export const Video = () => {
  return (
    <div className={styles.container}>
      <BlockHeader
        subtitle="– демонстрация платформы"
        title="Посмотрите, как работает наша платформа"
      />

      <video
        preload="auto"
        src="/videos/video-dashboard.mp4"
        controls
        playsInline={false}
      />
    </div>
  );
};
