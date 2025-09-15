import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function ChatScreen() {
  const { chatId } = useParams()
  const navigate = useNavigate()

  // Dummy messages (later fetch from backend using chatId)
  const messages = [
    { id: 1, sender: "me", text: "Hey, how are you?", time: "12:30 PM" },
    { id: 2, sender: "them", text: "I’m good! You?", time: "12:31 PM" },
    { id: 3, sender: "me", text: "Chilling, wanna meet up?", time: "12:32 PM" },
    { id: 4, sender: "them", text: "Sure, let’s do it 😄", time: "12:34 PM" },
  ]

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center bg-[#8B4513] text-white px-4 py-3 shadow-md">
        <button onClick={() => navigate(-1)} className="mr-3">
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-semibold text-lg">Chat {chatId}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl shadow 
              ${msg.sender === "me"
                ? "bg-[#8B4513] text-white rounded-br-none"
                : "bg-white text-gray-900 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-[10px] text-gray-300 block mt-1 text-right">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 px-4 py-3 flex items-center bg-white">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button className="ml-3 bg-[#8B4513] text-white px-4 py-2 rounded-full">
          Send
        </button>
      </div>
    </div>
  )
}
