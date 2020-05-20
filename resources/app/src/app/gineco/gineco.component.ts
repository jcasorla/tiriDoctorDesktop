import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-gineco',
  templateUrl: './gineco.component.html',
  styleUrls: ['./gineco.component.css']
})
export class GinecoComponent implements OnInit {

  gineco: any = {};
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
    if(this.pat.gineco.length >0){
      this.show=false;

    }
    
  }

  refresh(){
    //refresh trick that did work to refresh @Input data
    console.log("in refresh");
    this._router.navigateByUrl("/refresh",{skipLocationChange:true}).then(() =>{
      this._router.navigate([decodeURI(this._location.path())]);
    });

  }
  

  onCreate(pat, form: NgForm): void { 
    form.value.fum+="T00:00:00"
    let myval=this._httpService.gineco(pat,form.value);
    if(myval==true){
      this.refresh();

    }else{
      this.errors=myval;
      console.log(myval);
    }        
  }

  onUpdate(form: NgForm) {
    form.value.fum+="T00:00:00"

    let myval=this._httpService.updateGineco(this.pat, form.value);

    if(myval==true){
      this.refresh();

    }else{
      this.errors=myval;
      console.log(myval);
    }
  }


}
