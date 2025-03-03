import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,


    getUsers: async () => {
        set({ isUsersLoading: true })
        try {
            const res = await axiosInstance.get('/messages/users')
            set({ users: res.data })


        } catch (error) {
            toast.error(error.response.data.message)

        }
        finally {
            set({ isUsersLoading: false })

        }
    },

    getMessages: async (userId) => {

        set({ isMessagesLoading: true })

        try {

            const res = await axiosInstance.get(`/message/${userId}`)
            set({ messages: res.data })

        } catch (error) {
            //toast.error(error.response.data.message);

        } finally {
            set({ isMessagesLoading: false })

        }


    },

    sendMessages: async (data) => {
        const { messages, selectedUser } = get()
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, data)
            set({ messages: res.data })

        } catch (error) {

        }


    },

    setSelectedUser: (selectedUser) => set({ selectedUser }),







}))