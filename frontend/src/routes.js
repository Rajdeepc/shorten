import Registration from './components/Registration/Registration.vue'
import Home from './components/Home/Home.vue'
import Profile from './components/Profile/Profile.vue'


const Routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/registration', component: Registration }
  ]

export default Routes