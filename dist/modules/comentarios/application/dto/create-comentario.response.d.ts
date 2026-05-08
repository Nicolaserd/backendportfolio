export interface CreateComentarioResponse {
    usuario: {
        id: string;
        nombre: string;
        correo: string | null;
    };
    comentario: {
        id: string;
        contenido: string;
        cantidadLikes: number;
        fechaCreacion: string;
    };
}
