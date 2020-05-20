import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  lab: any = {};
  errors:any;
  showGrid= true;
  showtable = false;
  showlab = true;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) { }

  @Input() pat : any;

  ngOnInit() {
    this.hideGrid();
  }

  hideGrid(){
    if(this.pat.grid.length >0){
      this.showGrid=false;

    }
    if(this.pat.lab.length >0){
      this.showlab=false;

    }
  }

  refresh(){
    //refresh trick that did work to refresh @Input data
    this._router.navigateByUrl("/refresh",{skipLocationChange:true}).then(() =>{
      this._router.navigate([decodeURI(this._location.path())]);
    });

  }
  showTable(){
    this.showtable=true;
  }
  hideTable(){
    this.showtable=false;
  }
  

  onCreate(pat, form: NgForm): void { 
    
    //grid
    let myval=this._httpService.grid(pat,form.value);
    if(myval==true){
      this.refresh();
      this.showGrid=false;  

    }else{
      this.errors=myval;
      console.log(myval);
    }   
     
  }
  onCreate2(pat, form: NgForm): void {   

    //lab
    let myval=this._httpService.lab(pat,form.value);
    if(myval==true){
      this.refresh();
      this.showlab=false;  

    }else{
      this.errors=myval;
      console.log(myval);
    }        
  }

  onUpdate(form: NgForm) {

    //grid
    console.log(form.value);
    let myval=this._httpService.updateGrid(this.pat, form.value);

      if(myval==true){
        this.refresh();
  
      }else{
        this.errors=myval;
        console.log(myval);
      }
  }

  onUpdate2(form: NgForm) {

      //lab
      console.log(form.value);

      let myval=this._httpService.updateLab(this.pat, form.value);

      if(myval==true){
        this.refresh();
  
      }else{
        this.errors=myval;
        console.log(myval);
      }
    }

}
