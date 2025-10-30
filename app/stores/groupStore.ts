import { mockedUser } from './userStore'
import type {InputMenuItem} from '#ui/components/InputMenu.vue'

type GroupMember = {
    userId: string,
    name: string,
    avatarImg: string,
}

type Group = {
    name: string,
    id: string,
    creator: User | GroupMember,
    members: GroupMember[],
}

const mockedGroups: Group[] = [
    {
        name: 'Schwer ausgelastete Erwachsene',
        id: '1',
        creator: mockedUser,
        members: []
    },
    {
        name: 'Neu in Hamburg',
        id: '2',
        creator: mockedUser,
        members: []
    },
    {
        name: 'Retroclub Zocker',
        id: '3',
        creator: mockedUser,
        members: []
    },
]



export const useGroupStore = defineStore('groupStore', {
    state: () => ({
        groups: mockedGroups,
        selectedGroup: '0',
    }),
    getters: {
        getSelectedGroupData: (state): Group => {
            if (state.selectedGroup !== '0') {
                const selectedGroupData = state.groups.find(group => group.id === state.selectedGroup)
                if (selectedGroupData) return selectedGroupData
            }

            const userStore = useUserStore()

            const myBucketListGroupData = {
                name: 'Meine Bucketlist',
                id: '0',
                creator: userStore.user,
                members: [],
            }

            return myBucketListGroupData
        },
        getGroupsAsInputMenuItems: (state): InputMenuItem[] => {
            return [
                {
                    label: 'Meine Bucketlist',
                    id: '0',
                },
                ...state.groups.map((group) => ({
                    label: group.name,
                    id: group.id,
                }))
            ]
        }
    },
    actions: {
        deleteGroupByName(groupName: string) {
            this.groups = this.groups.filter(group => group.name !== groupName)
            this.selectedGroup = '0'
        },
    }
})