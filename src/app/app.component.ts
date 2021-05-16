import { Component, OnInit } from '@angular/core';
import{ Constants } from './config/constants'; 
import { BrowserModule, Title } from '@angular/platform-browser';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiService } from "./shared/services/rest-api.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent implements OnInit{
  title = Constants.TitleOfSite;

  public appPages = [
    { title: 'Bio', url: '/folder/Bio', icon: 'mail' },
    { title: 'Education', url: '/folder/Education', icon: 'paper-plane' },
    { title: 'Skils', url: '/folder/Skills', icon: 'heart' },
    { title: 'Work History', url: '/folder/WorkHistory', icon: 'archive' },
    { title: 'Organizations', url: '/folder/Organizations', icon: 'trash' },
    { title: 'Portfolio', url: '/folder/Portfolio', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private titleService: Title, public restApi: RestApiService, public httpClient: HttpClient) {
    //console.log(title);//GlobalConstants.API_ENDPOINT);
    this.titleService.setTitle(Constants.TitleOfSite);

    
  



  }
  ngOnInit() { 
    console.log(this.title); 

  } 


  
}
