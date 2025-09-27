import { type JSX } from "react";
import portfolio, { type PortfolioItem } from "../data/portfolioData";

export default function Portfolio(): JSX.Element {
  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16 px-1.5">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-dark dark:text-white text-2xl lg:text-3xl mb-4">
              Latest Projects
            </h2>
            <p className="text-secondary font-medium text-md">
              Here are the web-based projects I have worked on, both in teams
              and individually.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {portfolio.map((item: PortfolioItem) => (
            <div
              key={item.id ?? `${item.title}-${Math.random()}`}
              className="mb-12 p-4 md:w-1/2"
            >
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full" />
              </div>

              <h3 className="font-semibold text-dark dark:text-white text-xl mt-5 mb-3">
                {item.title}
              </h3>

              <div className="flex items-center gap-3 mt-2">
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${item.title}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform transform hover:-translate-y-0.5 hover:scale-[1.01] shadow-md bg-primary text-white"
                  >
                    {/* External link SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      aria-hidden
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>Visit</span>
                  </a>
                )}
              </div>

              {item.description &&
              typeof item.description === "object" &&
              !Array.isArray(item.description) ? (
                <>
                  {item.description.intro && (
                    <p className="font-medium text-base text-secondary mt-2 text-justify">
                      {item.description.intro}
                    </p>
                  )}

                  {Array.isArray(item.description.points) &&
                    item.description.points.length > 0 && (
                      <ul className="list-disc list-inside mt-2 text-base text-secondary">
                        {item.description.points.map((line, idx) => (
                          <li key={idx} className="mb-1">
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                </>
              ) : Array.isArray(item.description) ? (
                <ul className="list-disc list-inside mt-2 text-base text-secondary">
                  {item.description.map((line, idx) => (
                    <li key={idx} className="mb-1">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-medium text-base text-secondary mt-2 text-justify">
                  {item.description}
                </p>
              )}

              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                Built with:{" "}
                {Array.isArray(item.tech)
                  ? item.tech.join(", ")
                  : (item.tech ?? "—")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
