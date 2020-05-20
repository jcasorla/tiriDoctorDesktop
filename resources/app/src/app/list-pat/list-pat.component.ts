import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-list-pat',
  templateUrl: './list-pat.component.html',
  styleUrls: ['./list-pat.component.css']
})
export class ListPatComponent implements OnInit {
  patients: [];
  selectedPatient: any;
  name : string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    this.getAllPacients();
  }

  getAllPacients() {
    this.patients=this._httpService.getPatients()['pacientes'];
    
  }

  refresh(){
    //refresh trick that did work to refresh @Input data
    console.log('refresh');
    this._router.navigateByUrl("/refresh",{skipLocationChange:true}).then(() =>{
      this._router.navigate([decodeURI(this._location.path())]);
    });

  }

  onClickDelete(pat) {
    if(confirm("Estas seguro de eliminar a " +pat['_doc'].firstName + " " +pat['_doc'].lastName + " " + pat['_doc'].sLastName)){
      let myval=this._httpService.deletePatient(pat['_doc'].sid);
      this.getAllPacients();

      // if(myval==true){
      //   this.getAllPacients();
      //   // this.refresh();

      // }else{
      // console.log("error deleting")
      // }
    }
    
  }
  search() {    
    
    this.patients=this._httpService.getPatients()['pacientes'].filter(res=>{
          if(res['_doc'].firstName.toLocaleLowerCase().match(this.name.toLocaleLowerCase())){
            return res['_doc'].firstName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          }
          else if(res['_doc'].lastName.toLocaleLowerCase().match(this.name.toLocaleLowerCase())){
            return res['_doc'].lastName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          }
          
        });
  }

}
