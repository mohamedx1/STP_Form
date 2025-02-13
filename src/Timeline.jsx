import TimelineItem from "./TimelineItem"

const Timeline = ({goals}) => {
  return (
    <div className="relative max-w-4xl mx-auto py-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent"></div>
      {goals.map((goal, index) => (
        <TimelineItem key={goal.id} goal={goal} index={index} />
      ))}
    </div>
  )
}

export default Timeline

