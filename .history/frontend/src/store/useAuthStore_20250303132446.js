import { create } from 'zustand'

import { axiosInstance } from '../libs/axios.js'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useChatStore } from './useChatStore.js'

import { io } from "socket.io-client"
const BASE_URL = "http://localhost:5001"

export const useAuthStore = create((set, get) => ({
    authUser: null,

    isSigningUp: false,
    isLoggingIn: false,

    isUpadtingProfile: false,
    isChekingAuth: true,
    onlineUsers: [],
    socket: null,
    checkAuth: async () => {
        try {
            const response = await axiosInstance.get('/auth/check')
            set({ authUser: response.data })
            get().connectSocket()

        } catch (error) {
            console.log("error in check auth ", error)
            set({ authUser: null })

        } finally {
            set({ isChekingAuth: false })
        }

    },

    signUp: async (data) => {
        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post('/auth/signup', data)
            set({ authUser: res.data })
            toast.success("Account created successfully")
            get().connectSocket()



        } catch (error) {
            toast.error(error.response.data.message)

        }
        finally {
            set({ isSigningUp: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout')
            set({ authUser: null })
            useChatStore.getState().resetChat()
            toast.success("Logout successfully")
            get().disconnectSocket()


        } catch (error) {
            toast.error(error.response.message.data)

        }

    }
    ,
    login: async (data) => {
        set({ isLoggingIn: true })
        try {
            const res = await axiosInstance.post('/auth/signin', data)
            set({ authUser: res.data })
            toast.success("Logged in successfully")

            get().connectSocket()



        } catch (error) {
            toast.error(error.response.data.message)

        }
        finally {
            set({ isLoggingIn: false })
        }
    },

    updateProfile: async (data) => {

        set({ isUpadtingProfile: true })
        try {
            const res = await axiosInstance.put('/auth/update-profile', data)

            set({ authUser: res.data })
            toast.success('Profile updated successfully')


        } catch (error) {

            console.log("error in updating profile", error)
            toast.error(error.response.data.message)
        }
        finally {
            set({ isUpadtingProfile: false })
        }

    },
    connectSocket: () => {
        const { authUser } = get()
        if (!authUser || get().socket?.connected) return
        const socket = io(BASE_URL, {
            query: {
                userId: authUser._id
            }
        })
        socket.connect()
        set({ socket: socket })
        socket.on('getOnlineUsers'()=> {

})

    },
disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect()

}








}))