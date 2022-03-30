import '../styles/globals.css'
import '../public/styles.css'
import type { AppProps } from 'next/app'
import {DefaultSeo } from 'next-seo'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <DefaultSeo
        description={"Yaudahlah Team merupakan sekumpulan anak gabut yang haus akan sebuah pengetahuan dari Kami semua sedang belajar terkait Backend Engineer, Frontend Engineer , Data Engineer, Data Science, AI Engineer, DevOps, etc"}
        defaultTitle="Yaudahlah Team"
        titleTemplate={`Yaudahlah`}
        openGraph={{
          title: "Yaudahlah Team",
          description: "Yaudahlah Team merupakan sekumpulan anak gabut yang haus akan sebuah pengetahuan dari Kami semua sedang belajar terkait Backend Engineer, Frontend Engineer , Data Engineer, Data Science, AI Engineer, DevOps, etc",
          images: [
            {
              url: `/default.jpeg`,
            },
          ],
        }}
        twitter={{
          handle: "@yaudahlahteam",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </div>
  )
    
}

export default MyApp
