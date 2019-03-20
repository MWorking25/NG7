import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import {BreadcrumbsService} from '../services/breadcrumbs.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];

  profilebg = {
    firstcolor: 'rgb(255, 64, 129)',
    secondcolor:'rgb(48, 63, 159)',
    colordegree:-90,
  };

  dataItems:Array<any> = [
    {primary:"rgb(48, 63, 159)",accent:"rgb(255, 64, 129)"},
    {primary:"rgb(25, 118, 210)",accent:"rgb(255, 82, 82)"},
    {primary:"rgb(56, 142, 60)",accent:"rgb(255, 82, 82)"},
    {primary:"rgb(175, 180, 43)",accent:"rgb(124, 77, 255)"},
    {primary:"rgb(245, 124, 0)",accent:"rgb(68, 138, 255)"},
    {primary:"rgb(0, 121, 107)",accent:"rgb(255, 171, 64)"},
  ];

  constructor(private _router: Router,private _breadcrumbs : BreadcrumbsService) { }

  ngOnInit() {
    this.setupTheme();
    this.CheckRoute();
  }


  setupTheme()
  {
    localStorage.getItem('primaryBg')?$("body").css("--primary", localStorage.getItem('primaryBg')):$("body").css("--primary", "rgb(48, 63, 159)");
    localStorage.getItem('accentBg')?$("body").css("--accent",localStorage.getItem('accentBg')): $("body").css("--accent","rgb(255, 64, 129)");
    localStorage.getItem('bgcolor1')? $("body").css("--bgcolor1",localStorage.getItem('bgcolor1')):  $("body").css("--bgcolor1",this.profilebg.firstcolor);
    localStorage.getItem('bgcolor2')? $("body").css("--bgcolor2",localStorage.getItem('bgcolor2')):  $("body").css("--bgcolor2",this.profilebg.secondcolor);
    localStorage.getItem('bgcolordeg')? $("body").css("--bgcolordeg",localStorage.getItem('bgcolordeg')):  $("body").css("--bgcolordeg",this.profilebg.colordegree+'deg');    
  }

  SelectedItem(details)
  {
    details.primary?localStorage.setItem('primaryBg', details.primary):'';
    details.accent?localStorage.setItem('accentBg', details.accent):'';
    details.firstcolor?localStorage.setItem('bgcolor1', details.firstcolor):'';
    details.secondcolor?localStorage.setItem('bgcolor2', details.secondcolor):'';
    details.colordegree?localStorage.setItem('bgcolordeg', details.colordegree+'deg'):'';
    this.setupTheme();
  };

  CheckRoute()
  {
    let routerUrl: string;
        this._router.events.subscribe((router: any) => {
          routerUrl = router.urlAfterRedirects;
          if(routerUrl === '/home/keep-notes')
          {
            $('.float').css('display','none');
          }
          else
          {
            $('.float').css('display','block');
          }
        });
  };



}
