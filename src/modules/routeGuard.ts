import { ViteSetupModule } from '@/types/ViteSetupModule';
import { useStorage } from '@vueuse/core'
import dayjs from 'dayjs'

export const install: ViteSetupModule = ({ isClient, router }) => {
	if (!isClient) return;

	router.beforeEach((to, from) => {
    const auth = localStorage.getItem('medwork-auth')

    const unauthRoutes = ['/login', '/ipd-consult', '/consult-status']

    // Reroute index to consult (temporary use as consult)
    if (to.path == '/') {
      return {path: '/ipd-consult'}
    }
    // --- remove code above after open full service

    if (to.path == '/login' && auth) {
      return { path: '/main'}
    }
    if (!unauthRoutes.includes(to.path) && !auth) {
      return { path: '/login'}
    }
  })
};
