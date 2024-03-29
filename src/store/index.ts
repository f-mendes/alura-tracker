import IProjeto from "@/interfaces/IProjeto";
import { createStore,Store, useStore as vuexUseStore } from "vuex";
import {InjectionKey} from "vue";
interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        'ADICIONAR_PROJETOS'(state, nome: string) {
            const projeto: IProjeto = {
                id: new Date().toISOString(),
                nome: nome
            }
            state.projetos.push(projeto)
        },
        'ATUALIZAR_PROJETO'(state, projeto: IProjeto) {
            const index = state.projetos.findIndex(p => p.id === projeto.id)
            state.projetos[index] = projeto
        },
        'EXCLUIR_PROJETO'(state, id: string) {
            state.projetos = state.projetos.filter(p => p.id !== id)
        }
    }
})

export function useStore(): Store<Estado>{
    return vuexUseStore(key)
}