import Links from '../components/Links'
import PageWrapper from '../components/PageWrapper'
import { useTranslation } from 'react-i18next'
import CursorCircle from '../components/CursorAnimation'

export default function HomePage() {
  const { t } = useTranslation('shared')

  return (
    <PageWrapper>
      <div className="md:min-h-[calc(98vh-7rem)] flex flex-col lg:flex-row sm:items-center justify-between mt-20 sm:mt-0 lg:ml-40 md:ml-20 ml-10 lg:mr-40 md:mr-20 mr-10">
        <CursorCircle />

        <article className="sm:mb-8 lg:mb-0 mr-1 lg:mr-4 md:mr-2 w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-Poppins font-bold text-nowrap">
            Eneko Yranzo
          </h1>
          <p className="text-xl md:text-2xl font-Montserrat">{t('home.rol')}</p>
          <hr className="w-16 my-4 border-4 border-emerald-400" />
          <Links />
        </article>

        <div className="hidden md:hidden lg:flex justify-center w-full lg:w-1/2">
          <div className="font-Montserrat italic">
            <h1 className="text-3xl">"Talk is cheap. Show me the code."</h1>
            <h2 className="text-xl text-right">— Linus Torvalds</h2>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
