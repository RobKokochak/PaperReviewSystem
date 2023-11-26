import prisma from "@/db"

export default async function OverviewContent() {
  await prisma.conference.create({ data: { title: "Information Systems Conference", deadline: new Date('25 December 2023').toISOString()}});
  const conferences = await prisma.conference.findMany();

  return (
    <>
      <div id="overview-content" className="flex py-10">
        <div id="upcoming-conf-card" className="flex-1 p-5 mr-5 max-w-sm rounded-xl bg-dark-color">
          <h4 className="mb-20 text-lg text-white">
            Upcoming Conferences
          </h4>
          <ul>
            {conferences.map(conference => (
              <li key={conference.id}>{conference.title}</li>
            ))}
          </ul>
        </div>
        <div id="content-right-col" className="flex-1">
          <div id="submitted-papers-card" className="p-5 mb-3 rounded-xl bg-dark-color">
            <h4 className="mb-20 text-lg text-white">
              Submitted Papers
            </h4>
          </div>
          <div id="assigned-papers-card" className="p-5 rounded-xl bg-dark-color">
            <h4 className="mb-20 text-lg text-white">
              Assigned Papers for Review
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}