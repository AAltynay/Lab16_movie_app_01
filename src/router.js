import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeH01.vue';
import Movies from './views/MoviesH01.vue';
import MovieDetails from './components/MovieDetails.vue';

const routes = [
  { path: '/', component: Home },  { path: '/movies', component: Movies },
  { path: '/movies/:id', component: MovieDetails, props: true },];
const router = createRouter({
  history: createWebHistory(),  routes,
});

export default router;