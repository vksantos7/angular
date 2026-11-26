import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:3001/usuarios'

  // GET - para listar todos os usuarios.
  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl)
  }

  // POST - para cadastrar um novo usuario.
  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario)
  }

}
