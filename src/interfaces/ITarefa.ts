import IProjeto from "@/interfaces/IProjeto";

export default interface ITarefa {
    tempo: number;
    descricao: string;
    projeto: IProjeto;
}