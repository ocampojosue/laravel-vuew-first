const Home = ()=> import('./components/Home.vue')
const Contact = ()=> import('./components/Contact.vue')

const Mostrar = ()=> import('./components/blog/Mostrar.vue')
const Crear = ()=> import('./components/blog/Crear.vue')
const Editar = ()=> import('./components/blog/Editar.vue')

export const routes = [
   {
      name: 'home',
      path: '/',
      component: Home
   },
   {
      name: 'contact',
      path: '/contacto',
      component: Contact
   },
   {
      name: 'mostrarBlogs',
      path: '/blogs',
      component: Mostrar
   },
   {
      name: 'agregarBlogs',
      path: '/crear',
      component: Crear
   },
   {
      name: 'editarBlogs',
      path: '/editar/:id',
      component: Editar
   },
]