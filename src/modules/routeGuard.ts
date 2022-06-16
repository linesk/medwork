import { ViteSetupModule } from '@/types/ViteSetupModule';
import { useStorage } from '@vueuse/core'
import dayjs from 'dayjs'

export const install: ViteSetupModule = ({ isClient, router }) => {
	if (!isClient) return;

	router.beforeEach((to, from) => {
    const ls = localStorage.getItem('passcode')
    if (to.path != '/' && !ls) {
      return { path: '/' }
    }
  })
};
