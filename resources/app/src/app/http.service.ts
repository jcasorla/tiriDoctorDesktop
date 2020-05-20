import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElectronService } from 'ngx-electron';
import { JsonPipe } from '@angular/common';

 


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient,
    private _electronService: ElectronService
    ){}

    launchWindow() {     
      this._electronService.shell.openExternal('https://www.linkedin.com/in/jose-casorla/');
    }
    uploadFile() {
      this._electronService.remote.dialog.showOpenDialog({properties: ['openFile', 'openDirectory',  'multiSelections']});
    }
    refreshWindow() {     
      this._electronService.clipboard.clear();
    }

  getPatients() {
    let test =''
  
    let myvar=this._electronService.ipcRenderer.sendSync('/api/pacientes', test);    
    return myvar;   
  }
  getPatient(id) {
    let myvar=this._electronService.ipcRenderer.sendSync('/api/pacientes/view', id);
    return myvar;
  }

  addPatient(data){
    let myvar=this._electronService.ipcRenderer.sendSync('/api/pacientes/create', data);
    return myvar;
  }

  updatePatient(data) {
    let myvar=this._electronService.ipcRenderer.sendSync('/api/pacientes/update', data);
    return myvar;
  }
  deletePatient(id) {
    this._electronService.ipcRenderer.send('/api/pacientes/delete', id);
  }

  actual(pat,actual){
    let arg={pat: pat, actual: actual};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/actual/create', arg);
    return myvar
  }

  updateActual(pat,actual){
    let arg={pat: pat, actual: actual};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/actual/update', arg);
    return myvar
  }

  deleteActual(pat,data){
    let arg={pat: pat, actual: data};
    this._electronService.ipcRenderer.send('/api/actual/delete', arg);
  }

  patologico(pat,data){
    let arg={pat: pat, patologico: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/patologico/create', arg);
    return myvar
  }

  updatePatologico(pat,data){
    let arg={pat: pat, patologico: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/patologico/update', arg);
    return myvar
  }

  noPatologico(pat,data){
    let arg={pat: pat, nopatologico: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/nopatologico/create', arg);
    return myvar
  }

  updateNoPatologico(pat,data){
    let arg={pat: pat, nopatologico: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/nopatologico/update', arg);
    return myvar
  }

  familiar(pat,data){

    let arg={pat: pat, familiar: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/familiar/create', arg);
    return myvar
  }

  updateFamiliar(pat,data){
    let arg={pat: pat, familiar: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/familiar/update', arg);
    return myvar
  }

  gineco(pat,data){
    let arg={pat: pat, gineco: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/gineco/create', arg);
    return myvar
  }

  updateGineco(pat,data){
    let arg={pat: pat, gineco: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/gineco/update', arg);
    return myvar
  }

  fisico(pat,data){
    let arg={pat: pat, fisico: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/fisico/create', arg);
    return myvar
  }

  updateFisico(pat,data){
    let arg={pat: pat, fisico: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/fisico/update', arg);
    return myvar
  }

  problema(pat,data){
    let arg={pat: pat, problema: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/problema/create', arg);
    return myvar
  }

  updateProblema(pat,data){
    let arg={pat: pat, problema: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/problema/update', arg);
    return myvar
  }

  deleteProblema(pat,data){
    let arg={pat: pat, problema: data};
    this._electronService.ipcRenderer.send('/api/problema/delete', arg);
  }

  grid(pat,data){
    let arg={pat: pat, grid: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/grid/create', arg);
    return myvar
  }

  updateGrid(pat,data){
    let arg={pat: pat, grid: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/grid/update', arg);
    return myvar
  }
  lab(pat,data){
    let arg={pat: pat, lab: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/lab/create', arg);
    return myvar
  }

  updateLab(pat,data){
    let arg={pat: pat, lab: data};
    let myvar=this._electronService.ipcRenderer.sendSync('/api/lab/update', arg);
    return myvar
  }

}



