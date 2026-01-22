export enum MessageCategory {
    PERGUNTA = "pergunta",
    RELATO = "relato",
    RECLAMACAO = "reclamacao"
}
export interface MessageClassifyRes {
    text: string;
    category: MessageCategory;
    confidence: number;
    strategy: string;
    elapsed_ms: number;
}