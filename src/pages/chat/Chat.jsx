import { Routes, Route } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import ChatScreen from "./chatScreen/ChatScreen"
import NewChat from './chatScreen/NewChat'
import Profile from "./dashboard/Profile"

export default function Chat() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="new-chat" element={<NewChat />} />
      <Route path="profile" element={<Profile />} />
      <Route path=":chatId" element={<ChatScreen />} />

    </Routes>
  )
}
