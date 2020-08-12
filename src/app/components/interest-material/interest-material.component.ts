import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest-material',
  templateUrl: './interest-material.component.html',
  styleUrls: ['./interest-material.component.scss']
})
export class InterestMaterialComponent implements OnInit {

  @Input() tipoMateriales?: number;
  
  constructor() { }
  jsonContenidoFiltrado: any = [];
  jsonContenido: any = [
    {"id":"des_curriculumhome","imagen":"study","titulo":"Estudia con Coursera","descripcion":"Encuentra aquí todos los mejores cursos las mejores universidades del mundo.","module":"study"},
    {"id":"des_curriculumhome","imagen":"entreview","titulo":"Prepara entrevistas","descripcion":"Prepárate de la mano de un psicólogo en la presentación de entrevistas.","module":"entreview"},
    {"id":"des_curriculumhome","imagen":"salary","titulo":"Compara tu salario","descripcion":"Compara tu salario actual con el mercado laboral.","module":"salary"},
    
    {"id":"des_study","imagen":"curriculumhome","titulo":"Mejora tu hoja de vida","descripcion":"Crea, mejora y personaliza tu hoja de vida.","module":"curriculumhome"},
    {"id":"des_study","imagen":"entreview","titulo":"Prepara entrevistas","descripcion":"Prepárate de la mano de un psicólogo en la presentación de entrevistas.","module":"entreview"},
    {"id":"des_study","imagen":"salary","titulo":"Compara tu salario","descripcion":"Compara tu salario actual con el mercado laboral.","module":"salary"},
    
    {"id":"des_entreview","imagen":"curriculumhome","titulo":"Mejora tu hoja de vida","descripcion":"Crea, mejora y personaliza tu hoja de vida.","module":"curriculumhome"},
    {"id":"des_entreview","imagen":"study","titulo":"Estudia con Coursera","descripcion":"Crea, mejora y personaliza tu hoja de vida.","module":"study"},
    {"id":"des_entreview","imagen":"salary","titulo":"Compara tu salario","descripcion":"Compara tu salario actual con el mercado laboral.","module":"salary"},
    
    {"id":"des_salary","imagen":"study","titulo":"Estudia con Coursera","descripcion":"Encuentra aquí todos los mejores cursos las mejores universidades del mundo.","module":"study"},
    {"id":"des_salary","imagen":"entreview","titulo":"Prepara entrevistas","descripcion":"Prepárate de la mano de un psicólogo en la presentación de entrevistas.","module":"entreview"},
    {"id":"des_salary","imagen":"joboffers","titulo":"Conoce ofertas laborales","descripcion":"Compara tu salario actual con el mercado laboral.","module":"joboffers"},
    
    {"id":"des_joboffers","imagen":"curriculumhome","titulo":"Mejora tu hoja de vida","descripcion":"Crea, mejora y personaliza tu hoja de vida.","module":"curriculumhome"},
    {"id":"des_joboffers","imagen":"entreview","titulo":"Prepara entrevistas","descripcion":"Prepárate de la mano de un psicólogo en la presentación de entrevistas.","module":"entreview"},
    {"id":"des_joboffers","imagen":"salary","titulo":"Compara tu salario","descripcion":"Compara tu salario actual con el mercado laboral.","module":"salary"},
    
    {"id":"des_advisory","imagen":"curriculumhome","titulo":"Mejora tu hoja de vida","descripcion":"Crea, mejora y personaliza tu hoja de vida.","module":"curriculumhome"},
    {"id":"des_advisory","imagen":"entreview","titulo":"Prepara entrevistas","descripcion":"Prepárate de la mano de un psicólogo en la presentación de entrevistas.","module":"entreview"},
    {"id":"des_advisory","imagen":"joboffers","titulo":"Conoce ofertas laborales","descripcion":"Compara tu salario actual con el mercado laboral.","module":"joboffers"},

    {"id":"itt_networking","imagen":"coworking","titulo":"Coworking","descripcion":"","module":"coworking"},
    {"id":"itt_networking","imagen":"branding","titulo":"Branding digital","descripcion":"","module":"digitalbranding"},
    {"id":"itt_networking","imagen":"legal","titulo":"Orientación legal","descripcion":"","module":"advisory-itt"},

    {"id":"itt_legal","imagen":"branding","titulo":"Branding digital","descripcion":"","module":"digitalbranding"},
    {"id":"itt_legal","imagen":"coworking","titulo":"Coworking","descripcion":"","module":"coworking"},
    {"id":"itt_legal","imagen":"networking","titulo":"Networking","descripcion":"","module":"networking"},
  
    {"id":"itt_branding","imagen":"coworking","titulo":"Coworking","descripcion":"","module":"coworking"},
    {"id":"itt_branding","imagen":"networking","titulo":"Networking","descripcion":"","module":"networking"},
    {"id":"itt_branding","imagen":"legal","titulo":"Orientación legal","descripcion":"","module":"advisory-itt"},

    {"id":"itt_coworking","imagen":"networking","titulo":"Networking","descripcion":"","module":"networking"},
    {"id":"itt_coworking","imagen":"branding","titulo":"Branding digital","descripcion":"","module":"digitalbranding"},
    {"id":"itt_coworking","imagen":"study","titulo":"Estudia con Coursera","descripcion":"","module":"study"},

    {"id":"itt_study","imagen":"networking","titulo":"Networking","descripcion":"Mide tu actual puntaje para futuras solicitudes financieras.","module":"networking"},
    {"id":"itt_study","imagen":"branding","titulo":"Branding digital","descripcion":"Recibe alertas para prevenir fraudes.","module":"digitalbranding"},
    {"id":"itt_study","imagen":"legal","titulo":"Orientación legal","descripcion":"Prepárate para afrontar mejor tus finanzas personales.","module":"advisory-itt"},

    {"id":"fr_alertas","imagen":"networking","titulo":"Tu seguridad informática","descripcion":"Mide tu actual puntaje para futuras solicitudes financieras.","module":"security"},
    {"id":"fr_alertas","imagen":"branding","titulo":"Tu score financiero","descripcion":"Recibe alertas para prevenir fraudes.","module":"ScoreCredit"},
    {"id":"fr_alertas","imagen":"legal","titulo":"Tu salud fianciera","descripcion":"Prepárate para afrontar mejor tus finanzas personales.","module":"financialHelath"},

    {"id":"fr_credit","imagen":"networking","titulo":"Alertas de productos","descripcion":"Mide tu actual puntaje para futuras solicitudes financieras.","module":"AlertNotifications"},
    {"id":"fr_credit","imagen":"branding","titulo":"Prueba salud financiera","descripcion":"Recibe alertas para prevenir fraudes.","module":"financialHealth"},
    {"id":"fr_credit","imagen":"legal","titulo":"Curso finanzas personales","descripcion":"Prepárate para afrontar mejor tus finanzas personales.","module":"economyStudy"},

    {"id":"fr_healt","imagen":"networking","titulo":"Tus alertas financieras","descripcion":"Mide tu actual puntaje para futuras solicitudes financieras.","module":"AlertNotifications"},
    {"id":"fr_healt","imagen":"branding","titulo":"Tu score financiero","descripcion":"Recibe alertas para prevenir fraudes.","module":"ScoreCredit"},
    {"id":"fr_healt","imagen":"legal","titulo":"Curso finanzas personales","descripcion":"Prepárate para afrontar mejor tus finanzas personales.","module":"economyStudy"},
    
    {"id":"fr_study","imagen":"networking","titulo":"Tus alertas financieras","descripcion":"Mide tu actual puntaje para futuras solicitudes financieras.","module":"security"},
    {"id":"fr_study","imagen":"branding","titulo":"Tu score financiero","descripcion":"Recibe alertas para prevenir fraudes.","module":"ScoreCredit"},
    {"id":"fr_study","imagen":"legal","titulo":"Curso finanzas personales","descripcion":"Prepárate para afrontar mejor tus finanzas personales.","module":"financialHealth"},
    
    {"id":"fr_legal","imagen":"networking","titulo":"Tu score financiero","descripcion":"Mide tu actual puntaje para futuras solicitudes financieras.","module":"ScoreCredit"},
    {"id":"fr_legal","imagen":"branding","titulo":"Tus alertas financieras","descripcion":"Recibe alertas para prevenir fraudes.","module":"AlertNotifications"},
    {"id":"fr_legal","imagen":"legal","titulo":"Curso finanzas personales","descripcion":"Prepárate para afrontar mejor tus finanzas personales.","module":"economyStudy"},
    
    {"id":"fr_credit2","imagen":"aprendizaje","titulo":"Domina Habilidades Cotizadas","descripcion":"Especializaciones impactantes en habilidades de tecnología y negocios.","module":"AlertNotifications"},
    {"id":"fr_credit2","imagen":"tiempo","titulo":"Aprendizaje flexible a tu propio ritmo","descripcion":"Aprende habilidades en cualquier momento y lugar.","module":"financialHealth"},
    {"id":"fr_credit2","imagen":"certificado","titulo":"Obtén un valioso certificado","descripcion":"Impulsa tu hoja de vida con certificados reconocidos por las mejores empresas.","module":"economyStudy"},
    

  ]

  ngOnInit() {
    this.jsonContenidoFiltrado = this.jsonContenido.filter(X => X["id"]==this.tipoMateriales);
  }

}
