import { Calendar } from "lucide-react"

const EventCard = ({ title, date, type, buttonText = "Register Now" }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Calendar className="text-blue-600 mr-3" size={20} />
          <span className="text-sm font-medium text-blue-600">{date}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{type}</p>
        <button className="w-full py-2 px-4 bg-gray-100 hover:bg-blue-50 text-blue-600 rounded-lg font-medium transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default EventCard
