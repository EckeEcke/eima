export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    const openRoutes = ['/faq', '/about', '/']

    if (!openRoutes.includes(to.path) && !userStore.isLoggedIn) {
        return navigateTo('/')
    }
})