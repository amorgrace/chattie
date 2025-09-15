import React from 'react'
import Header from './Header'
import Nav from './Nav'
import ChatList from './Chatlist'

export default function Dashboard () {
    return (
        <div>
            <Header />
            <ChatList />
            <Nav />
        </div>
    )
}