import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  newconsulta: any = {};
  editconsulta: any ={};
  errors:any;
  shownew= true;
  showedit= false;
  showlist=false;
  name: any;
  consulta: any;
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) { }

  @Input() pat : any;

  ngOnInit() {
    this.consulta=this.pat.actual;
    // console.log(this.pat.actual);
  }


  // search() {
  //   this.consulta = this.pat.actual.filter(res=>{
  //     return res.enfermedad.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //   });
  // }

  showEdit(list){
    this.editconsulta=list['_doc'];
    this.showedit=true;
  }
  showList(){
    this.showlist=true;
  }
  hideList(){
    this.showlist=false;
  }

  refresh(){
    //refresh trick that did work to refresh @Input data
    this._router.navigateByUrl("/refresh",{skipLocationChange:true}).then(() =>{
      this._router.navigate([decodeURI(this._location.path())]);
    });

  }

  onCreate(pat, form: NgForm): void { 
   

    let myval=this._httpService.actual(pat, form.value);

    if(myval==true){
      this.refresh();

    }else{
      this.errors=myval;
      console.log(myval);
    }
  }

  onUpdate(form: NgForm) {

    let myval=this._httpService.updateActual(this.pat, form.value);

    if(myval==true){
      this.refresh();

    }else{
      this.errors=myval;
      console.log(myval);
    }
  }

  onClickDelete(data) {
    if(confirm("Estas seguro de eliminar a " +data['_doc'].enfermedad)){     

      this._httpService.deleteActual(this.pat, data['_doc']);
      this.refresh();
      
    }
    
  }

}
