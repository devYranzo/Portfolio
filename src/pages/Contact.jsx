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
              <span className="flex justify-center">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <image
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUklEQVR4nO2a24tPURTHt/slFClSRjQUJg94UG4Zl1LK5ckL86CkJOJBM38AU0TyMl5cIqXw4MnLeCCUvMglybgkl5oZkQy5fbRq/1h2v3N++3c5v985x/7Ubup31t57re+cy1rrHGMCgUAgEAgEAn8BRgObgP05GRuBkcYHYAXwhvzxClhaKvi5wGfyyydgdpwAF5TxO+AI0JnxcdTGUuBSnAD9ynChyQkSi4prABgaZTigDCeYnABMdC6FsVGGd5TRaWCwyTgSA3DGV4A2x/Bs5OmSAcR3GwO+AgwCTjrGl4ERJmOIz9Z3vAVQIhxzJlwDxphsJXJXI4KPF0CJcNiZdB0YZ1KO+Gh91RwoS4ACNo3U3JU7qkkpwHjgtuNzpz1WvgACsBP4pSY/AqaYlAFMAu4pP8XnPep4ZQIIwHbgp1rgGTDDpASgCXii/PsBbHNsKhdAADYD39QiL4GZpsEA04Ee5dd3YEsRu+oEEIB1wBe1kOTY80yDkMIGeK38+Sqlb4Rt9QKoclmqqgLvgUWmzgALgF7lh1Sxq2PsayOAACwBPqgFRZBWUyfs/h/V/uLL4hJzSgsAzAL2yl/PCqvP+Q+sMQkjezg9CzkL5nvM8xKgxxo89XSmBXjrXIMbTELI2naPAnL9z/Gc6yXAH6q4C8sjqK2MuCp9Cr0AmsuYn4wAEc9hSUJ2mRpRJA95DEwtc43kBIjJxPaZKimSiT6sJBNNXIBSuXgl1LIWqYsAgpTNQLez4XGpMI0ntho9VMtqtG4CxNTjJ3xabBH9iO5q+xF1FUAAhgMXnY3PA8NMBMAQ4JQz54r3W500CVBuQDGC1aQn2RABVFe2q0iLrUnZTLO/abpq2ZVumAAxLTZ5B3HTDl1hYm29b5qpF6AA0OEkNC5yrMMkQCoEEKRqBG45DkmicwNYZhIiNQIUkGwOWG5H4j3G1AlQb4IA/xIEMKWMTM4IAngK8E0ZjTI5wRZnmuK1BfBcGa00OQFYpeLqjTPsUob3gckm40gMwAMV17k442an69pnq7n2FHzsWO5ot5/59DuvzVpKKba1RL6eVSTd3uF72qx1Wt1ZR17krq/kA6NWYLf9wqIzY+OgfB8g7wvjulCBQCAQCAQCAfOf8hsNc3XhoNYmTwAAAABJRU5ErkJggg=="
                    width="24"
                    height="24"
                    preserveAspectRatio="none"
                    style={{ filter: 'brightness(0) invert(0)' }}
                  />
                </svg>
                {t('contact.emailButton')}
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/eneko-yranzo-638a6836b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded mx-4 bg-gray-200 text-black font-medium shadow-lg hover:scale-95 ease-in-out duration-200"
            >
              <span className="flex justify-center">
                {t('contact.LinkedinButton')}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <image
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACD0lEQVR4nO2aSU7DMBhG3W6YNog7wApxEaYLtJyhAxUCCSns4AAUWgQbBJdiWLJBAm7wkNWgBgvaJo4TO/2f5EXVpL+/58R1GyslCIIg+AtQB5rAkUXT59dViAAH5ENThQij0cuDSAV8CzSA8xnbBfBRGQFpAGrAZaWugJThr43Q73MhgL9H/gY4q7wA/g+v546o0gKYED5+v7oCmBI+VwHACrAPdCxXZJNaD9iwmPD065pxnJ0ARoV0x74ohue8wlsLYDSJPBYUfCYBacLnIaBndg4YpFiRpW2nwHpe4a0EMLrnv4zJZUGVRJbwtgL2Eic+hRjeVsBh4sQr5fFXnSsBUebJw4OR/+endCMYAeQQ3vgp3Uj1jxAlCrC97PPqRFSGAC/ClyXAm/BlCPAqfNECMq7wNoBX4GXS6tF7AWRf4Z0kjj8OUgAWl73z/lGMgH7akS+sfzguAGxlDV8VAWvAW/z5/QwrvLAFaIBVYFNloBICbBABiIBIBIwRASq4ApaIAERAJALGiAAVXAFLRAAiIBIBY0SACq6AJSIA9wK6iQID5RnAMNG/tosCu8bWmNI2SJgAi/FDkR+2XRRZBj4TRW59kBCHv0v0S+8KX3JVrMtvXuJNUkcltaEx8pqWk/CJJzcP+Mt92r/Ts0roGLdD2ejLvuU8/B9zgp4Y2w73CU5ruvaOs3teEARBzSHf6cgc+I28Ur8AAAAASUVORK5CYII="
                    width="24"
                    height="24"
                    preserveAspectRatio="none"
                    style={{ filter: 'brightness(0)' }}
                  />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
