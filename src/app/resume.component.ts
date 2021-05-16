import { Component, OnInit } from '@angular/core';
import { RestApiService } from "./shared/services/rest-api.service";

@Component({
  /*
    selector: 'app-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.css']
  */
})
export class ResumeComponent implements OnInit {

    
  Resume: any = {};
  //Resume = this.Resume;

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadResume();
    //Resume = this.Resume;
  }

  // Get employees list
  loadResume() {
    return this.restApi.getResume().subscribe((data: {}) => {
      this.Resume = data;
      console.log(JSON.stringify(this.Resume));
    })
  }

  // Delete employee
  /*
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }  
  */

}