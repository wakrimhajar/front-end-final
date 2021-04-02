import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';
import { JarwisService } from '../Services/jarwis.service';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent implements OnInit {
  
  user = new User();
  users=[] as any ;
  constructor(private Jarwis:JarwisService) { }

  ngOnInit(): void {
  }

  onClick(){
    var element = document.getElementById("CloseButton") as any;
    element.click();
  }
  listActif(){
 this.Jarwis.getListLocataireActif().subscribe(
      data => {console.log(data);  this.users=Object.values(data);}, error => console.log(error)
      );
     
  }
  listArchive(){
    this.Jarwis.getListLocataireArchive().subscribe(
         data => {console.log(data);  this.users=Object.values(data);}, error => console.log(error)
         );
        
     }

}
