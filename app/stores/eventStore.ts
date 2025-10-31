import type { Category } from '~~/types/categories'

export type EventObject = {
    title: string,
    image: string,
    creator: {
        name: string,
        id: string,
    },
    avatarImg: string,
    proposedDate?: string,
    createdAt: string,
    id: string,
    description?: string,
    groups: string[],
    price?: string,
    hasHappened: boolean,
    dateIsSet?: boolean,
    category?: Category,
    link?: string,
}

const entries: EventObject[] = [
    {
        title: "Action Arena",
        image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
        creator: {
            name: "Squidward",
            id: '1234',
        },
        avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
        proposedDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        id: '1',
        description: 'Hi. Ich habe Lust mal wieder in die Action Arena nach Norderstedt zu gehen. Lasertag, Arcade Games und Schwarzlichtminigolf.',
        groups: ['1', '3'],
        price: '40€',
        hasHappened: false,
        dateIsSet: true,
        category: 'activity',
        link: 'https://action-arena.info/',
    },
    {
        title: "Escape Room",
        image: "https://opolum.com/wp-content/uploads/2022/03/Escape-Room-Hamburg.png",
        creator: {
            name: "Sponge",
            id: '12345',
        },
        avatarImg: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/70/701f939d7104b6e5756a8f2f45ec0ffc08fd508e_full.jpg",
        proposedDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        id: '2',
        groups: ['1', '2'],
        price: '20€',
        hasHappened: false,
        category: 'activity',
    },
    {
        title: "Astor Kino",
        image: "https://www.hannover.de/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/hmtg/erlebnispakete/2015/fr%C3%BChling-2015/kinosaal-astor/12417952-2-ger-DE/Kinosaal-Astor.jpg",
        creator: {
            name: "Cineast",
            id: '123456',
        },
        avatarImg: "https://www.hannover.de/var/storage/images/_aliases/alias_1600xVariabel/media/01-data-neu/bilder/hmtg/erlebnispakete/2015/fr%C3%BChling-2015/kinosaal-astor/12417952-2-ger-DE/Kinosaal-Astor.jpg",
        proposedDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        id: '3',
        groups: ['2', '3'],
        price: '15€',
        hasHappened: false,
    },
    {
        title: "Würfel & Zucker",
        image: "https://image.jimcdn.com/app/cms/image/transf/dimension=364x10000:format=png/path/s82cc354e4f0c6458/image/i35968f9d2875b051/version/1671732700/image.png",
        creator: {
            name: "Mr. Miepel",
            id: '1234',
        },
        avatarImg: "https://ih1.redbubble.net/image.842289618.5875/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg",
        proposedDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        id: '4',
        groups: ['1'],
        hasHappened: false,
        category: 'restaurant',
    },
    {
        title: "Action Arena",
        image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
        creator: {
            name: "Squidward",
            id: '1234',
        },
        avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
        id: '5',
        createdAt: new Date().toISOString(),
        groups: [],
        hasHappened: true,
    },
    {
        title: "Action Arena",
        image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
        creator: {
            name: "Squidward",
            id: '1234',
        },
        avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
        id: '6',
        createdAt: new Date().toISOString(),
        groups: ['3', '2'],
        hasHappened: true,
    },
    {
        title: "Action Arena",
        image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
        creator: {
            name: "Squidward",
            id: '1234',
        },
        avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
        proposedDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        id: '7',
        groups: ['3'],
        hasHappened: false,
    },
    {
        title: "Action Arena Part 2",
        image: "https://www.hamburg.de/resource/image/405032/landscape_ratio16x9/1280/720/cb70f4d5ad91380c4ddd3dfb836ebafa/C01F0D1E981E6B54862C20077AF7636F/action-arena-bild-2-.jpg",
        creator: {
            name: "Squidward",
            id: '1234',
        },
        avatarImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f2/5c/da/f25cda65-3b49-20e4-ddaf-371fecad468c/iMessage_App_Icon-0-0-1x_U007emarketing-0-0-0-0-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-181-0-0.png/512x512bb.jpg",
        id: '8',
        createdAt: new Date().toISOString(),
        groups: [],
        hasHappened: false,
    },
]

export const useEventStore = defineStore('eventStore', {
    state: () => ({
        events: entries,
    }),
    getters: {
        getEventsForSelectedGroup: (state) => {
            const groupStore = useGroupStore()
            const selectedGroup = groupStore.selectedGroup
            if (selectedGroup === '0') return state.events.filter(entry => entry.groups.length === 0)
            const filteredEvents = state.events.filter(entry => entry.groups.includes(selectedGroup))
            if (filteredEvents) return filteredEvents
            return state.events
        }
    },
    actions: {
        updateEvent(eventId: string, updatedData: EventObject) {
            this.events = this.events.map(event => {
                if (event.id !== eventId) {
                    return event
                } return updatedData
            })
        },
        deleteEvent(eventId: string) {
            this.events = this.events.filter(event => event.id !== eventId)
        }
    }
})
