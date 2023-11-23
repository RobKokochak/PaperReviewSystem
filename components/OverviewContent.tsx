export default function OverviewContent() {
  return (
    <div>
      <div id="overview-content" className="flex py-10">
        <div id="upcoming-conf-card" className="flex-1 p-5 mr-5 max-w-sm rounded-xl bg-dark-color">
          <h4 className="mb-20 text-lg text-white">
            Upcoming Conferences
          </h4>
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
    </div>
  )
}