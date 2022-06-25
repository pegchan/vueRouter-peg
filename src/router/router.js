// importacion de la libreria
import {createRouter,createWebHashHistory} from 'vue-router'

// 1. Define route components.
// These can be imported from other files



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { 
     path:'/',
      
    redirect:'/home'

  },

  {
    path:'/pokemon',
    name:'pokemon',
    component: ()=>import(/*webpackChunkName: "PokemonLayout" */'../modules/pokemon/layouts/PokemonLayout'),

    children:[
                  { 
                    
                        path:'home', 
                        name:'pokemon-home',
                        component: ()=>import(/*webpackChunkName: "ListPage" */'../modules/pokemon/pages/ListPage')

                  },
                  {      
                        path: 'about',
                        name:'pokemon-about',
                        component: ()=>import(/*webpackChunkName: "AboutPage" */'../modules/pokemon/pages/AboutPage')

                  },
                  { 
                    
                        name:'pokemon-id',
                        path:'pokemon/:id',
                    
                        component: ()=>import(/*webpackChunkName: "PokemonPage" */'../modules/pokemon/pages/PokemonPage'),
                        props:(route)=>{
                          const id =Number(route.params.id);
                            return isNaN(id) ? {id:1}:{id}
                        }
                    },

                    { 
                      path:'',
                      redirect:{name:'pokemon-about'}
                 
                    },

            ]
  },
  {
    path:'/dbz',
    name:'dbz',
    component: ()=>import(/*webpackChunkName: "DBZLayout" */'../modules/dbz/layout/DragonBZLayout.vue'),

    children:[
                  { 
                    
                        path:'characters', 
                        name:'dbz-characters',
                      
                        component: ()=>import(/*webpackChunkName: "Characters" */'../modules/dbz/pages/Characters.vue')

                  },
                  {      
                        path: 'about',
                        name:'dbz-about',
                        component: ()=>import(/*webpackChunkName: "About-DBZ" */'../modules/dbz/pages/About.vue')

                  },
              

                    { 
                      path:'',
                      redirect:{name:'dbz-about'}
                 
                    },

            ]
  },


               
  { 
        name:'',
        path:'/:pathMatch(.*)*',
        // component: NoPageFound 
         component: ()=>import(/*webpackChunkName: "NoPageFound" */'../modules/shared/pages/NoPageFound')

    },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// se exporta el router
export default router


/* las siguientes lineas de codigo son para llamar el componente    Regularmente se lla aen el archivo main
// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

*/

