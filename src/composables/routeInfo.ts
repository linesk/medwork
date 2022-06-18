import { useRoute } from 'vue-router'

const routes = [ 
  {
    path: '/',
    name: 'passcode',
    header: '',
  },
  {
    path: '/main',
    name: 'main',
    header: 'Ready to work!'
  },
  {
    path: '/consult-status',
    name: 'consult-status',
    header: 'Consultation status'
  },
  {
    path: '/ipd-consult',
    name: 'ipd-consult',
    header: 'IPD Consultation form'
  },
  {
    path: '/division',
    name: 'division',
    header: 'Role'
  },
  {
    path: '/registration',
    name: 'registration',
    header: 'Registration'
  },
]

export const currentRouteInfo = () => {
  const route = useRoute()
  const thisRoute = routes.filter(e=>e.path==route.path)[0] ?? null

  return thisRoute

}
