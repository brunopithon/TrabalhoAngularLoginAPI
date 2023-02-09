import { Component,DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'authentication';
  isadmin=false;
  isMenuVisible=false;
  constructor(private route:Router){
    let funcao =sessionStorage.getItem('funcao');
    if(funcao=='admin'){
      this.isadmin=true;
    }
  }
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let funcao=sessionStorage.getItem('funcao');
    if (currentroute == '/login' || currentroute == '/registro') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (funcao == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }
}
