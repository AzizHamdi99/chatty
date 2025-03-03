import { create } from 'zustand'

import { axiosInstance } from '../libs/axios.js'

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
        try {

        } catch (error) {

        }
    }








}))