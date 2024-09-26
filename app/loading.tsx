import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(33, 33, 33, 1)',
      }}
    >
      <p
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: 'rgba(194, 194, 194, 1)',
        }}
      >
        Загрузка Consult Ai...
      </p>
    </div>
  );
};

export default Loading;
