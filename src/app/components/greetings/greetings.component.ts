import { Component, OnInit, Inject, Renderer2, ElementRef, OnDestroy, NgZone, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GreetingsService } from '../../services/greetings.service'
import { Observable} from 'rxjs'
import { take } from 'rxjs/operators';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';


declare var $: any;
declare var Swiper: any;
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class GreetingsComponent implements OnInit, OnDestroy{
  sheet_id = '1OX1rW7PlL1XQxdlgjXQf3FACXPev1WELxeySzXqv-J4'
  sheet = 'Form Responses 1'
  greetings;

  constructor(
    private element: ElementRef,
    private greetingService: GreetingsService
  ) { }

  
  async ngOnInit(): Promise<any> {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];

    navbar.classList.remove('navbar-transparent');
    console.log('Hola Mundo')
    /* this.greetingService.getAnswers().subscribe(data => this.greetings = data) */
    /* this.greetings = await this.greetingService.getAnswers().pipe(take(1)).toPromise(); */
    this.greetings = [
      {
        Message: "Test Messagese234",
        Name: "JC",
        Timestamp: "5/14/2020 17:15:30",
        background: "",
        photo: "https://drive.google.com/open?id=13fBQtcUB1V1sIG1dxKd5ue9z--vif9cz",
        photo_id: "13fBQtcUB1V1sIG1dxKd5ue9z--vif9cz",
        photo_url: "https://drive.google.com/open?id",
      },
      {
        Message: "Test Message 1234123",
        Name: "JC123",
        Timestamp: "5/14/2020 17:15:30",
        background: "azure",
        photo: "https://drive.google.com/open?id=13fBQtcUB1V1sIG1dxKd5ue9z--vif9cz",
        photo_id: "13fBQtcUB1V1sIG1dxKd5ue9z--vif9cz",
        photo_url: "https://drive.google.com/open?id",
      }
    ]
    console.log("data",this.greetings);
    document.getElementsByTagName('app-navbar')[0].children[0].classList.add('navbar-transparent')
    
    
    
  }

  ngOnDestroy() {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
   
    
    console.log("hello");
    
  }

  ngAfterViewInit() {

    setTimeout(() => {
      let scroll_drag = document.querySelector(".swiper-scrollbar-drag");
      scroll_drag.classList.add("run-animation")
       var swiper = new Swiper($('.swiper-container'), {
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
          snapOnRelease: false
        },
        speed: 600,
        parallax: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 4400,
          disableOnInteraction: false
        },
        cubeEffect: {
          slideShadows: true,
        },

      })

      swiper.on('slideChange', function () {
        scroll_drag["style"].width = "1px";
        scroll_drag.classList.remove("run-animation")
        void scroll_drag["offsetWidth"];
        scroll_drag.classList.add("run-animation")
      });

    }, 3000);
  
    
  }


  getPhotoID(photo){
    let id = photo.slice(33, photo.length)
    let styles
    let url = 'http://drive.google.com/uc?export=view&id='+id
    let background = `url(${url})`
    styles = {
      "background" : background + "no-repeat center",
    }
    return styles
  }

  testAPI(){
    /* console.log(this.greetingService.getAnswers()); */
    console.log(this.greetings)
    
  }

  async getAnswers(){
    return await this.greetingService.getAnswers().subscribe(data => this.greetings = data)
  }

  onResize(event) {
    console.log(event.target);
    
    event.target.innerWidth; // window width
    console.log(event.target.innerWidth);
    
  }

  showGreetingsDialog(){
    console.log("click");
    
  }


 




}
