import Registration from './components/Registration/Registration.vue'
import Home from './components/Home/Home.vue'
import Profile from './components/Profile/Profile.vue'


const isAuthenticated = () => {
  const userData = JSON.parse(sessionStorage.getItem('user'));
  if(userData && userData.authToken){
    return true
  }
  return
}

const Routes = [
    { path: '/', component: Home},
    { path: '/profile', component: Profile },
    { path: '/registration', component: Registration , beforeEnter :(to,from,next) => {
      if(to.path === '/registration' && isAuthenticated()){
        next({path: '/',replace: true})
      } else {
        next()
      }
    } }
  ]

export default Routes