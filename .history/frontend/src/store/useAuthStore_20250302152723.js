import { create } from 'zustand'

import { axiosInstance } from '../libs/axios.js'
import toast from 'react-hot-toast'

export const useAuthStore = create((set) => ({
    authUser: null,

    isSigningUp: false,
    isLoggingIn: false,

    isUpadtingProfile: false,
    isChekingAuth: true,

    checkAuth: async () => {
        try {
            const response = await axiosInstance.get('/auth/check')
            set({ authUser: response.data })

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



        } catch (error) {
            toast.error(error.response.data.)

        }
    }








}))