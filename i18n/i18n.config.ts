export default defineI18nConfig(() => ({
    legacy: false,
    datetimeFormats: {
        'en': {
            default: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            }
        },
        'de': {
            default: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            }
        }
    }
}))