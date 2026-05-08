export interface ListComentariosItemResponse {
  idUsuario: string;
  idComentario: string;
  nombreUsuario: string;
  corazonesRecibidos: number;
  comentario: string;
}

export interface ListComentariosResponse {
  page: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  items: ListComentariosItemResponse[];
}
