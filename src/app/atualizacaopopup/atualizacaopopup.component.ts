import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-atualizacaopopup',
  templateUrl: './atualizacaopopup.component.html',
  styleUrls: ['./atualizacaopopup.component.css']
})
// PAROU
export class AtualizacaopopupComponent implements OnInit {
  constructor(private builder:FormBuilder, private service: AuthService, private toastr: ToastrService,private dialogref: MatDialogRef<AtualizacaopopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

    this.service.getuserrole().subscribe(res => {
      this.listaFuncoes = res;
    });



  }

  ngOnInit(): void {
    if (this.data.usercode != '' && this.data.usercode != null) {
      this.loaduserdata(this.data.usercode);
    }
  }

  listaFuncoes:any;
  editdata: any;

  registroform = this.builder.group({
    id: this.builder.control(''),
    nome: this.builder.control(''),
    senha: this.builder.control(''),
    email: this.builder.control(''),
    genero: this.builder.control('masculino'),
    funcao: this.builder.control('',Validators.required),
    statusAtivo: this.builder.control(false)
  });

  loaduserdata(code: any) {
    this.service.GetUserbyCode(code).subscribe(res => {
      this.editdata = res;
      console.log(this.editdata);
      this.registroform.setValue({
        id: this.editdata.id, nome: this.editdata.nome,
        senha: this.editdata.senha, email: this.editdata.email, genero: this.editdata.genero,
        funcao: this.editdata.funcao, statusAtivo: this.editdata.statusAtivo
      });
    });
  }

  atualizarRegistro(){
    this.service.updateuser(this.registroform.value.id, this.registroform.value).subscribe(res => {
      this.toastr.success('Atualização realizada com sucesso');
      this.dialogref.close();
    });
  }
}
