import { useTranslation } from 'react-i18next'
import PageWrapper from '../components/PageWrapper'
import CursorCircle from '../components/CursorAnimation'

import FotoEneko from '../assets/FotoEneko.png'
import OsakidetzaLogo from '../assets/osakidetza-logo.png'
import DorletLogo from '../assets/dorlet-Logo.png'
import CV from '../documents/CV_EnekoYranzo.pdf'

export default function AboutMePage() {
  const { t } = useTranslation('shared')

  return (
    <PageWrapper>
      <div className="flex flex-col md:items-center font-Montserrat">
        <CursorCircle />
        <h1 className="text-4xl m-4 font-bold self-center">{t('aboutMe.title')}</h1>
        <article className="md:flex rounded-xl shadow-lg bg-transparent backdrop-blur-md border border-stone-900 m-4 max-w-[1170px] lg:min-w-[1170px] overflow-hidden items-stretch">
          <img
            src={FotoEneko}
            alt="Eneko image"
            className=" rounded-md max-w-40 md:max-w-70 min-h-30 object-cover m-auto mask-b-from-60%"
          />
          <div className="flex flex-col flex-1 p-6 justify-between">
            <div>
              {t('aboutMe.text1')}
              <br />
              <br />
              {t('aboutMe.text2')}
              <br />
              <br />
              {t('aboutMe.text3')}
            </div>
            <button className="self-start mt-4 mb-9 bg-emerald-400 px-4 py-2 rounded text-black hover:scale-95 ease-in-out duration-200">
              <a href={CV} download="CV_EnekoYranzo.pdf" className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 17V3" />
                  <path d="m6 11 6 6 6-6" />
                  <path d="M19 21H5" />
                </svg>
                {t('aboutMe.download')}
              </a>
            </button>
          </div>
        </article>
        <section className="max-w-[1170px] lg:min-w-[1170px]">
          <h3 className="text-2xl mt-4 w-full self-start pl-4 md:pl-0">Experiencia:</h3>
          <div className="flex flex-col md:flex-row items-center mt-4 gap-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-4 bg-zinc-800/40 backdrop-blur-md border border-stone-900 rounded-xl text-center w-52 h-[240px]">
                <img
                  src={OsakidetzaLogo}
                  alt="Logo Osaakidetza"
                  className="w-24 m-auto drop-shadow-xl shadow-white"
                />
                <h3 className="font-bold text-lg">Osakidetza OSI Araba</h3>
                <p className="text-md text-gray-300">Técnico Informático (Prácticas)</p>
                <p className="text-sm text-emerald-400">Marzo 2024 - Mayo 2024</p>
              </div>

              <div className="mt-2 md:mt-0 ml-0 md:ml-4 text-2xl md:text-3xl">
                <span className="hidden md:inline">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" fill="url(#pattern0_31_2)" />
                    <defs>
                      <pattern
                        id="pattern0_31_2"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use href="#image0_31_2" transform="scale(0.0111111)" />
                      </pattern>
                      <image
                        id="image0_31_2"
                        width="90"
                        height="90"
                        preserveAspectRatio="none"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACH0lEQVR4nO3cPY9NQRzH8UuxHppFsQqReCzpxAsQiYRXIEqlsK3tqLwFrZqEQqtgl5AgUVJReiqwWYXdrwxu9sbuvXse5pw598z38wbmP7/cTCZn/v87GEiSJEmSJEmSJElSzwDHgaOp6+gtYD+wyLol4EjqunoHuMdGX4HzqWvrFeAHm1sFbgDbU9fYC2ztETCXus4cgg4+AKdT1zrVKO4ncC11vTkEPXQH2J267qlDNa+Aw6lrzyHo4DNwLnX9U4N61oBbXgGbD3roIbC3yHrZIp73wKnU+8kh6GAFuJx6T51EM8IVcFfqveUQdPASONR08TuBeeAFsEy+PgJnmgr5IPAm9Q475BdwHdgW+5dsyJu7D8zGCjocFxrvLXAiRtDhTNZk4aHhYt2gv2+xiNbdBmaqBq1yliq93pRcRH8tGnR7jvmLbke5xp2Wiuobj44WPAudUlXOaK93LV3vnpdYKFfLwKVKAY8EfTX1LjruHXCyVsj/gt4BvE69m456AOypHfJI2AcMe8Nn0oWon0lHwp4BrgBPgW/k6xNwNnrA04hmn7LsZhpqKGQfZ/8XOWDbDcaJGLINNJNEbAnbN3Gh3FGPTY5F1Qj5i227JdRoRHcWsYwKITtaUUWJgB0WqqNgyI6/1VUgZAc6Gx5RDle3m86nRALcHTN0fyHWGhr8CXoOeDIS8mP/t6NBoYnFz5qSJEmSJEmSJEmSBh3yGzSYxDWhqSWVAAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                </span>
                <span className="md:hidden">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id="a" patternUnits="userSpaceOnUse" width="33" height="32">
                        <image
                          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxklEQVR4nO3bOUoEURSF4UYcUFEUBMfEXoJGnbgWN+IiBMV1KAi6AEOzji6YKTgsQATlF6EFMXLoeve++84PFXTU9T5OUlDV6ymllFJKKaXSBMwD20D/F9ey933XhHsA3PD3HoFjYMP7PCEDtoAh4+sJGHifK1TAJHA9RuSv2Ove5wsTsE93HXmfL0zAeYfQD97nCxNgdNuS9xlDBNx2DL3pfcYQIWhBpwotWtCpQosWdKrQogWdKrRoQacKLVrQqUKLFnSq0KIFnSq0aEGnCi1a0KlCixZ0qtCiBZ0qtGhBpwotWtCpQosWdKrQon8MtfDLz9T63677jt+PHvzj3lYiAK8CF+RvCOx4Ql/STnfAnAfyIvBGW+15QM8CL7TVbnHoEfYJ7XQFTHhBTwNn5M/cv+xqANvckRvAtjDIibEtHHJCbAuLnAjbwiMnwLZqkCvGtuqQK8S2apErwrbqkSvAtjTIgbEtHXJA7LzIgbDzIwfAbgfZEbs9ZAfsdpELYgu5ALaQC2ALuQC2kAtgC7kAtpALYAu5ALaQC2Bb8w8jBbBNyGMOmAEOgWfgFTgF1sb9P2oUMPXxJuvnb6WUUkoppVQvbe9uqEYOv2e9MQAAAABJRU5ErkJggg=="
                          width="33"
                          height="32"
                          preserveAspectRatio="none"
                        />
                      </pattern>
                    </defs>
                    <rect width="33" height="32" fill="url(#a)" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="p-4 bg-zinc-800/40 backdrop-blur-md border border-stone-900 rounded-xl text-center w-52 h-[240px] mb-4 md:mb-0">
                <img
                  src={DorletLogo}
                  alt="Logo Osaakidetza"
                  className="w-24 m-auto drop-shadow-lg"
                />
                <h3 className="font-bold text-lg">Dorlet Systems</h3>
                <p className="text-md text-gray-300">Desarrolador Web (Prácticas)</p>
                <p className="text-sm text-emerald-400">Mayo 2025 - Junio 2025</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
