import {defineStore} from 'pinia'
import type {User} from "@/features/Users/types/types.ts";
import type {Loading, Error} from "@/features/Application/types/types.ts";
import usersAPI from "@/features/Users/api/usersAPI.ts";
import {useAppStore} from "@/features/Application/appStore.ts";
import type {AxiosError} from "axios";

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [] as User[],
        loading: 'idle' as Loading,
        page: 0 as null|number,
        nextPage: 1 as number,
        hideTrigger: false,
    }),
    actions: {
        async fetchNewPortion() {
            const appStore = useAppStore()
            try{
                const res = await usersAPI.getAllUsers(this.nextPage)
                if(res.status === 200 && res.data.data.length){
                    this.users = [...this.users, ...res.data.data]
                    this.page = res.data.page
                    this.nextPage = res.data.page + 1
                }else{
                    appStore.setAppStatus('You reached the end!')
                    this.hideTrigger = true
                }
            }catch(e){
                debugger;
                console.log(e)
                const error = e as AxiosError
                appStore.setAppError(error.code+'-'+error.message)
            }
        },
        async removeUser(userID: number) {
            const appStore = useAppStore()
            this.loading = 'pending'
            try{
                const res = await usersAPI.deleteUser(userID)
                if(res.status === 204){
                    this.users = this.users.filter(user => user.id !== userID)
                    this.loading = 'fulfilled'
                    appStore.setAppStatus('Item successfully removed')
                }
            }
            catch(e){
                const error = e as AxiosError
                this.loading = 'rejected'
                appStore.setAppError(error.code+'-'+error.message)
            }
        },
        async getSingleUser(userID: number){
            const appStore = useAppStore()
            try{
                const res = await usersAPI.getUser(userID)
                if(res.status === 200){
                    return res.data.data
                }
            }
            catch(e){
                const error = e as AxiosError
                appStore.setAppError(error.code+'-'+error.message)
            }
        }
    }
})
