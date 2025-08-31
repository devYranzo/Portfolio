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
          <h2 className="text-3xl font-bold mb-6">📬 Hablemos</h2>
          <p className="text-white mb-12 max-w-xl mx-auto">
            ¿Te interesa colaborar, trabajar juntos o simplemente hablar? Estoy siempre abierto a
            nuevas oportunidades.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Email */}
            <a
              href="mailto:enekoy21@gmail.com"
              className="px-6 py-3 rounded bg-emerald-400 text-black font-medium shadow-lg hover:scale-95 ease-in-out duration-200"
            >
              Escríbeme un correo
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium shadow-lg hover:bg-gray-900 hover:shadow-xl transition"
            >
              Conecta en LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800 font-medium shadow-lg hover:bg-gray-300 hover:shadow-xl transition"
            >
              Mira mi GitHub
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
