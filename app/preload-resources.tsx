import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

const PreloadResources = () => {
  if (process.env.NODE_ENV !== 'production') return;

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="krlg1-jf0V6FiYv5EfhdKhRWbMxh2-f2DDIJgP_GMNI"
        />
      </Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
            ym(${process.env.NEXT_PUBLIC_YA_METRIKA}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        }}
      />

      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YA_METRIKA}`}
            style={{ position: 'absolute', left: -9999 }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

export default PreloadResources;
