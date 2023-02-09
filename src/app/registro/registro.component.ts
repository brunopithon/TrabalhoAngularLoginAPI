import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService) {

  }

  registroform = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    nome: this.builder.control('', Validators.required),
    senha: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    genero: this.builder.control('masculino'),
    funcao: this.builder.control(''),
    statusAtivo: this.builder.control(false)
  });
  // 25min

  prossigaRegistro() {
    if (this.registroform.valid) {
      this.service.RegisterUser(this.registroform.value).subscribe(result => {
        this.toastr.success('Entre em contato com o administrador para habilitar o acesso.','Registrado com sucesso')
        this.router.navigate(['login'])
      });
    } else {
      this.toastr.warning('Por favor insira dados válidos.')
    }
  }
}
