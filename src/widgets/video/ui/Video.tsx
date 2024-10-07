import BlockHeader from '@/shared/ui/block-header';

import styles from './Video.module.scss';

export const Video = () => {
  return (
    <div className={styles.container}>
      <BlockHeader
        style={{ marginBottom: '1.5em' }}
        subtitle="– демонстрация платформы"
        title="Посмотрите, как работает наша платформа"
      />
      <p>
        Платформа отлично подходит для работы на компьютере, планшете и
        мобильных устройствах. Вы можете пользоваться её помощью с любого
        устройства и в любое время.
      </p>

      <video
        preload="auto"
        src="/videos/video-dashboard.mp4"
        controls
        playsInline={false}
      />
    </div>
  );
};
