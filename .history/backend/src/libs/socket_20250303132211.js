import { Server } from 'socket.io'
import http from 'http'

import express from 'express'


const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173'],

    }
})
//used to store online users 
const userSocketMap = {}
io.on("connection", (socket) => {
    console.log('a user connected', socket.id)
    const userId = socket.handshake.query.userId
    if (userId) userSocketMap[userId] = socket.id

    //io.emit() is used to send  events to all the connected clients
    io.emit('getOnlineUsers')

    socket.on("disconnect", () => {
        console.log("A user disconnect", socket.id)

    })

})

export { io, app, server }