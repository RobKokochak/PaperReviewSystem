import prisma from "@/db"

export default async function OverviewContent() {
  const conferences = await prisma.conference.findMany();
  const papers = await prisma.paper.findMany();

  return (
    <>
      <div id="overview-content" className="flex h-full">
        <div id="upcoming-conf-card" className="flex-1 p-5 mr-5 max-w-sm rounded-xl bg-dark-color">
          <h4 className="text-lg">
            Upcoming Conferences
          </h4>
          <ul className="mt-3 text-xs">
            {conferences.map(conference => (
              <li key={conference.conference_id}>{conference.name}</li>
            ))}
          </ul>
        </div>
        <div id="content-right-col" className="flex-1 flex flex-col">
          <div id="submitted-papers-card" className="flex-1 p-5 mb-3 rounded-xl bg-dark-color">
            <h4 className="text-lg">
              Submitted Papers
            </h4>
            <ul className="mt-3 text-xs">
            {papers.map(paper => (
              <li key={paper.paper_id}>{paper.paper_title}</li>
            ))}
          </ul>
          </div>
          <div id="assigned-papers-card" className="flex-1 p-5 rounded-xl bg-dark-color">
            <h4 className="text-lg">
              Assigned Papers for Review
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}