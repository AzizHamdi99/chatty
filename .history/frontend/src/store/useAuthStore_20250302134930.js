import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    authUser: null,

    isSigningUp: false,
    isLoggingIn: false,

    isUpadtingProfile: false,
    isChekingAuth: true,

    checkAuth: async () => {
        try {
            const response = await axiosInstance.get()

        } catch (error) {

        }

    }








}))