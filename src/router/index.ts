import {createRouter, RouteRecordRaw, createWebHistory} from "vue-router";
import Tarefas from "../views/Tarefas.vue";
import Projetos from "../views/Projetos.vue";

const route: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router
