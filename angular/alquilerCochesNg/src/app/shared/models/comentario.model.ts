
export class Comentario {

  public comentarioPregunta :Comentario
    constructor(  
        public idComentario: number,
        public fkCocheCm: number,
        public fkUsuarioCm: number,
        public contenido: number,
        public puntuacion: number,
        public pregunta: number
    ) { }
    
}