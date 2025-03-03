import { create } from "zustand";
import { axiosInstance } from "../libs/axios";

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true })
        try {
            const res = await axiosInstance.get('/message/users')
            set({ users: res.data })


        } catch (error) {


        }
        finally {
            set({ isUsersLoading: false })

        }
    },




}))