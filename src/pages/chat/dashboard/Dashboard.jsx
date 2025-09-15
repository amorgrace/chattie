import React from 'react'
import Header from './Header'
import Nav from './Nav'
import ChatList from './ChatList'

export default function Dashboard () {
    return (
        <div>
            <Header />
            <ChatList />
            <Nav />
        </div>
    )
}