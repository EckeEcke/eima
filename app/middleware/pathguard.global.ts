export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    const openRoutes = ['/faq', '/about', '/']
    console.log(userStore.isLoggedIn)

    console.log(to.path)
    if (!openRoutes.includes(to.path) && !userStore.isLoggedIn) {
        return navigateTo('/')
    }
})