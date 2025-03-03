import { create } from "zustand";

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    setSelectedUser


}))