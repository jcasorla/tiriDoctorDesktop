import { Component, OnInit} from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pat',
  templateUrl: './edit-pat.component.html',
  styleUrls: ['./edit-pat.component.css']
})
export class EditPatComponent implements OnInit {
  editPatient: any = {};
  errors:any;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      let id=params['id'];
      
      this.findPatient(id)
  });
  }

  findPatient(id) {
    this.editPatient=this._httpService.getPatient(id)['pacientes']["_doc"];
  }

  onSubmit() {
    

    let myval=this._httpService.updatePatient(this.editPatient);

    if(myval==true){
      this._router.navigate(['/app/list'])

    }else{
      this.errors=myval;
      console.log(myval);
    }
   
  }

}
