import {useState} from "react"

const TimelineItem = ({goal, index}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`mb-80 flex justify-between items-center w-full ${ index % 2 === 0 ? "flex-row-reverse" : "" }`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-secondary shadow-xl w-10 h-10 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-black">{goal.id}</h1>
      </div>
      <div
        className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
        onClick={toggleExpand}
      >
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{goal.title}</h3>
        <p className="text-sm font-medium text-primary">{goal.date}</p>
        <div className={`mt-4 overflow-hidden transition-all duration-300 ${ isExpanded ? "max-h-40" : "max-h-0" }`}>
          <p className="text-sm text-gray-600 leading-relaxed">{goal.description}</p>
        </div>
        <button
          className={`mt-4 text-sm font-medium text-accent transition-transform duration-300 ${ isExpanded ? "rotate-180" : "" }`}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          ▼
        </button>
      </div>
    </div>
  )
}

export default TimelineItem

