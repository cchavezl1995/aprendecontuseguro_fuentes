import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from "src/app/services/register.service";
import { AlertasFraudeService } from "../../services/alertas-fraude.service";
import Swal from 'sweetalert2';
// Logs
import { LogsService } from "../../services/logs/logs.service";
import { AlertFraudes } from 'src/app/interfaces/alert-fraudes';
import { FormGroup } from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/register/user-login';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { WindowScrollController } from '@fullcalendar/core';


@Component({
  selector: 'app-alert-notifications',
  templateUrl: './alert-notifications.component.html',
  styleUrls: ['./alert-notifications.component.scss']
})
export class AlertNotificationsComponent implements OnInit {
  loader: boolean;
  fono: string;
  mail: string;
  habilitado: boolean;
  alertaNotificacion: AlertFraudes = {};
  user: any;
  autorizaAlertas: boolean;
  guardado: boolean;
  constructor(public login: LoginService, public alertNot: AlertasFraudeService, private log: LogsService ,public reg: RegisterService, private route: ActivatedRoute, public router: Router) { }
  api: String;
  ngOnInit() {
    this.login.verifySesion();
    let number = 0;
    this.route.paramMap.subscribe(
      res => {
        number = res['params']['id'];
      }
    )

    if (this.route.snapshot.queryParamMap.get('p') != null) {
      this.router.navigate(["/alertas-notificaciones"]);
    }
    window.scroll(0, 0);
    this.user = this.login.getDataUser();
    if (this.login.isActive()) {
      this.fono = String(this.user['numeroCelular']).substr(2, String(this.user['numeroCelular']).length);
      this.mail = this.user['correoElectronico'];
    }
    this.respuesta();

  }
  respuesta() {    
    this.alertNot.result(this.user.idUsuario).subscribe(
      res => {
        // console.log(res);
        if (res['codigo'] == 0) {
          this.habilitado = true;
        } else if(res['codigo'] == 1) {
          this.habilitado = false;
        }
        
      }
    )
  }


  accedeCoursera() {

  this.loader = true;
 //this.reg.linkCoursea(this.login.getDataUser());
//  console.log(this.login.getDataUser().idUsuario);
//  console.log(this.login.getDataUser().identificacion);
 this.reg.linkCoursea(this.login.getDataUser().identificacion).subscribe(
   res =>{
     console.log(res);
     window.location.href=`${res}`
    //  window.open()
   // console.log(JSON.stringify(res));
     // window.location.href=JSON.stringify(res).replace(""","");
    
  //  var myWindow = window.open("www.google.com","_blank")
   }
 )

  }


}
