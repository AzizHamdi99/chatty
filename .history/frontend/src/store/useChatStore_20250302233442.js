import { create } from "zustand";

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true })
        try {


        } catch (error) {

        }
        finally {
            set({ isUsersLoading: false })

        }
    },




}))