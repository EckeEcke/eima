export type User = {
    userId: string,
    name: string,
    avatarImg: string,
    interestedEvents?: string[],
    groups?: string[],
    createdEvents?: string[],
    completedEvents?: string[],
    xp: number,
}

const mockedUser: User = {
    userId: '1223545',
    name: 'Gargamel',
    avatarImg: 'https://pbs.twimg.com/profile_images/1564577680678338561/E4AsnlXd_400x400.jpg',
    interestedEvents: ['1', '2'],
    groups: ['Schwer ausgelastete Erwachsene', 'Neu in Hamburg'],
    createdEvents: ['3', '4'],
    completedEvents: ['6'],
    xp: 0,
}

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: mockedUser,
    }),
})
