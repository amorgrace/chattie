import { Link } from "react-router-dom"

export default function ChatList() {
  const chats = [
    {
      id: 1,
      name: "Solo Emrys",
      message: "Hey, are we still meeting later?",
      time: "12:30 PM",
      unread: 2,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      name: "Gidiot",
      message: "I sent you the files!",
      time: "11:15 AM",
      unread: 3,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Samod",
      message: "Thanks ❤️",
      time: "Yesterday",
      unread: 5,
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 4,
      name: "Praise",
      message: "Call me when you’re free.",
      time: "Yesterday",
      unread: 1,
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: 5,
      name: "Kelvin",
      message: "Okay, see you soon 😘",
      time: "Mon",
      unread: 20,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 6,
      name: "Tobe Madman",
      message: "Bro, did you watch the game?",
      time: "Sun",
      unread: 13,
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: 7,
      name: "Matesun",
      message: "Let’s catch up this week!",
      time: "Sat",
      unread: 9,
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      id: 8,
      name: "Princewill",
      message: "Meeting moved to 3PM.",
      time: "Fri",
      unread: 4,
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    {
      id: 9,
      name: "Eve",
      message: "Can you send me the recipe?",
      time: "Thu",
      unread: 4,
      avatar: "https://randomuser.me/api/portraits/women/64.jpg",
    },
    {
      id: 10,
      name: "Ray",
      message: "I’ll be there in 5 mins.",
      time: "Wed",
      unread: 6,
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ]

  return (
    <div className="flex flex-col divide-y divide-gray-200 h-[calc(100vh-160px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
      {chats.map((chat) => (
        <Link
          to={`/chat/${chat.id}`}
          key={chat.id}
          className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer"
        >
          {/* Avatar */}
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />

          {/* Name + Message */}
          <div className="flex-1 min-w-0">
            <h4 className="text-gray-900 font-semibold truncate">{chat.name}</h4>
            <p className="text-sm text-gray-600 truncate">{chat.message}</p>
          </div>

          {/* Time + Unread */}
          <div className="flex flex-col items-end ml-3 min-w-[60px]">
            <span className="text-xs text-gray-500">{chat.time}</span>
            {chat.unread > 0 && (
              <div className="mt-1 bg-[#C19A6B] text-black text-xs font-bold min-w-[22px] h-5 px-2 flex items-center justify-center rounded-full">
                {chat.unread}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
