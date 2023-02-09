import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService) {
    sessionStorage.clear();
  }

  result: any;

  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    senha: this.builder.control('', Validators.required)
  });

  prossigalogin() {
    if (this.loginform.valid) {
      this.service.GetUserbyCode(this.loginform.value.id).subscribe(item => {
        this.result = item;
        if (this.result.senha === this.loginform.value.senha) {
          if (this.result.statusAtivo) {
            sessionStorage.setItem('usuario', this.result.id);
            sessionStorage.setItem('função', this.result.funcao);
            this.router.navigate(['']);
          } else {
            this.toastr.error('Entre em contato com o administrador', 'Usuário inativo');
          }
        } else {
          this.toastr.error('Credenciais inválidas');
        }
      });
    } else {
      this.toastr.warning('Por favor insira dados válidos.')
    }
  }
}
