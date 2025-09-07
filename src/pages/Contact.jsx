import PageWrapper from '../components/PageWrapper'
import { useTranslation } from 'react-i18next'
import CursorCircle from '../components/CursorAnimation'

export default function ContactPage() {
  const { t } = useTranslation('shared')

  return (
    <PageWrapper>
      <div className="flex flex-col items-center font-Montserrat">
        <CursorCircle />
        <section className="py-20 text-center">
          <h2 className="text-5xl font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-white mb-12 max-w-xl mx-auto">{t('contact.question')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:enekoy21@gmail.com"
              className="px-6 py-3 rounded mx-4 bg-emerald-400 text-black font-medium shadow-lg hover:scale-95 ease-in-out duration-200"
            >
              {t('contact.emailButton')}
            </a>
            <a
              href="https://www.linkedin.com/in/eneko-yranzo-638a6836b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded mx-4 bg-gray-200 text-black font-medium shadow-lg hover:scale-95 ease-in-out duration-200"
            >
              {t('contact.LinkedinButton')}
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
