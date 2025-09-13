import PageWrapper from '../components/PageWrapper'
import { useTranslation } from 'react-i18next'
import CursorCircle from '../components/CursorAnimation'
import GithubLogo from '../components/GithubLogo'

export default function ProjectsPage() {
  const { t } = useTranslation('projects')

  const projects = t('list', { returnObjects: true })

  return (
    <PageWrapper>
      <div className="flex flex-col items-center font-Montserrat">
        <CursorCircle />
        <h1 className="text-4xl m-4">{t('projects.title', { ns: 'shared' })}</h1>
        <article className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-8 mx-[8.33%]">
          {projects.map((project) =>
            project.id === 'soon' ? (
              // Diseño futuros proyectos.
              <div
                key={project.id}
                className="group flex items-center justify-center rounded-xl max-w-[370px] max-h-[500px]
                           border-2 border-dashed border-stone-400 m-4 p-6"
              >
                <h2 className="text-2xl font-bold text-stone-400 text-center group-hover:scale-110 ease-in-out duration-200">
                  {project.title}
                </h2>
              </div>
            ) : (
              // Diseño normal.
              <div
                key={project.id}
                className="group flex-col rounded-xl shadow-lg max-w-[370px] max-h-[500px]
                           bg-transparent backdrop-blur-md border border-stone-900 m-4 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title + ' image'}
                  className="rounded-md mr-4 w-full h-60 object-cover object-top-left
                             mask-b-from-60% group-hover:scale-105 ease-in-out duration-200"
                />
                <div className="grid grid-rows-[auto_1fr_auto] h-36 px-4 ">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-stone-300 line-clamp-3">{project.description}</p>
                  <div className="flex justify-between items-end my-2">
                    <ul className="flex flex-wrap gap-2">
                      {project.tecnologies.map((tech, idx) => (
                        <li key={idx} className="text-sm bg-zinc-600 px-2 py-1 rounded-md">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <GithubLogo
                        w={24}
                        h={24}
                        classname="fill-white hover:fill-emerald-400 transition-all ease-in-out duration-200"
                      />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </article>
      </div>
    </PageWrapper>
  )
}
