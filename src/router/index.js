import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from '@/components/HelloPage'
import ListView from '@/components/ListView'
import Profile from '@/components/Profile'
import Ranking from '@/components/Ranking'
import RankHunters from '@/components/RankHunters'
import Register from '@/components/Register'
import Rules from '@/components/Rules'
import NewPlanet from '@/components/NewPlanet'
import Hunter from '@/components/Hunter'
import PostedRewards from '@/components/PostedRewards'
import OwnedPlanets from '@/components/OwnedPlanets'
import BuiltPlanets from '@/components/BuiltPlanets'
import PlanetView from '@/components/PlanetView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloPage',
      component: HelloPage
    },
    {
      path: '/list',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/ranking/planets',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/ranking/hunters',
      name: 'RankHunters',
      component: RankHunters
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/setup-planet',
      name: 'NewPlanet',
      component: NewPlanet
    },
    {
      path: '/hunter',
      name: 'Hunter',
      component: Hunter
    },
    {
      path: '/profile/posted-rewards',
      name: 'PostedRewards',
      component: PostedRewards
    },
    {
      path: '/profile/owned-planets',
      name: 'OwnedPlanets',
      component: OwnedPlanets
    },
    {
      path: '/profile/built-planets',
      name: 'BuiltPlanets',
      component: BuiltPlanets
    },
    {
      path: '/planet-view',
      name: 'PlanetView',
      component: PlanetView
    }
  ]
})
