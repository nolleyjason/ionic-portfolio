import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonItemGroup, IonItemDivider, IonLabel, IonItem, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular';

import{ Constants } from '../config/constants'; 

import { RestApiService } from "../shared/services/rest-api.service";


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  
})
export class FolderPage implements OnInit {
  Resume: any = {};
  skills: any = [];
  sections: any = [];
  public folder: string;
  //skills = Constants.Skills;
  constructor(private activatedRoute: ActivatedRoute, public restApi: RestApiService) { 
    
  }

  
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.Resume.basics);
    
      this.loadResume();
  //this.skills = 

  
  }

  loadResume() {
    console.log("Loading resume...");
    return this.restApi.getResume().subscribe((data: {}) => {
      this.Resume = data;
      //this.skills = this.Resume.skills;
      console.log(JSON.stringify(this.Resume));
      this.getSkillSections(this.Resume.skills);
    })
  }

  getSkillSections(_skills){
    //var _skills = Resume.skills;
    var z = [];
    var x = [];
    x = x.concat(_skills[0].keywords);
    console.log("x: "+x);
    var l = _skills.length - 1;

    console.log("l: "+l);
    var i = 1;
    if(l > 1){
      console.log("i is greater than 1");
      while(i <= l)
      {
        var y = _skills[i].keywords;

        console.log("y: "+y);
        let missing = y.filter(item => x.indexOf(item) < 0);
        x = x.concat(missing);
        i++;
      }
    }
    console.log(x);
    this.sections = x;
  }

  getSkills(section){
    //return [{name:'test'},{name:'two'}];
    console.log("Looking for: "+section);
    let _skills = this.Resume.skills;
    let i = 0;
    let l = _skills.length;
    var z = [];
    while(i < l)
    {
      if(_skills[i].keywords.indexOf(section) >= 0)
      {
        z.push(_skills[i].name);
      }
      i++;
    }
    return z;
  }

}
