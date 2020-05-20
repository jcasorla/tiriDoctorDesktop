import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patologico',
  templateUrl: './patologico.component.html',
  styleUrls: ['./patologico.component.css']
})
export class PatologicoComponent implements OnInit {
  patologico: any = {};
  errors:any;
  show= true;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) { }
  @Input() pat : any;

  ngOnInit() {
    this.hideActual();
  }

  hideActual(){
    if(this.pat.patologico.length >0){
      this.show=false;

    }
    
  }

  refresh(){
    //refresh trick that did work to refresh @Input data
    this._router.navigateByUrl("/refresh",{skipLocationChange:true}).then(() =>{
      this._router.navigate([decodeURI(this._location.path())]);
    });

  }
  

  onCreate(pat, form: NgForm): void { 
     let myval=this._httpService.patologico(pat,form.value);
     if(myval==true){
       this.refresh();
 
     }else{
      this.errors=myval;
      console.log(myval);
     }
  }

  onUpdate(form: NgForm) {

    let myval=this._httpService.updatePatologico(this.pat, form.value);

    if(myval==true){
      this.refresh();

    }else{
      this.errors=myval;
      console.log(myval);
    }
  }

}
