import { Component, OnInit, Inject, Renderer2, ElementRef, OnDestroy, NgZone, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GreetingsService } from '../../services/greetings.service'
import { Observable} from 'rxjs'
import { take } from 'rxjs/operators';

import { trigger, keyframes, animate, transition } from '@angular/animations'
import * as kf from './keyframes';


declare var $: any;
declare var Swiper: any;
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
  animations: [
    trigger('cardAnimator',[
      transition('* => bounceOut', animate(1000, keyframes(kf.bounceOut)))
    ])
  ]
})
export class GreetingsComponent implements OnInit, OnDestroy{
  animationState:string;
  swiper;
  sheet_id = '1OX1rW7PlL1XQxdlgjXQf3FACXPev1WELxeySzXqv-J4'
  sheet = 'Form Responses 1'
  greetings;
  pop=true
  startY;
  autoplay=true

  constructor(
    private element: ElementRef,
    private greetingService: GreetingsService
  ) { }

  
  async ngOnInit(): Promise<any> {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];

    navbar.classList.remove('navbar-transparent');
    console.log('Hola Mundo')

    this.greetings = await this.greetingService.getAnswers().pipe(take(1)).toPromise();
    /* this.greetings = [
      {
        Message: "Test Messagese234",
        Name: "JC",
        Timestamp: "5/14/2020 17:15:30",
        background: "",
        photo: "https://drive.google.com/open?id=16O5o3QKdyam0O_mmLE4ainEV86D1ZbDh",
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
    ] */
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
      console.log(scroll_drag["offsetWidth"]);
      let totalWidth = scroll_drag["style"].width.slice(0, scroll_drag["style"].width.length - 2);
      /* console.log(scroll_drag["style"].width); */
      
       this.swiper = new Swiper($('.swiper-container'), {
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
          snapOnRelease: false
        },
        speed: 600,
        grabCursor: true,
        parallax: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        cubeEffect: {
          slideShadows: true,
        },

      })

      this.swiper.on('slideChange', function () {
        let video = document.getElementById('myVideo')
        scroll_drag["style"].width = "1px";
        scroll_drag.classList.remove("run-animation")
        void scroll_drag["offsetWidth"];
        scroll_drag.classList.add("run-animation")

        console.log(scroll_drag["style"].webkitAnimationName);
        /* console.log($('.swiper-slide-active').attr('src')); */
        /* console.log('contains video', document.querySelector('.swiper-slide-active'));
        console.log('contains video', document.querySelector('.swiper-slide-active').contains(video)); */
        
        
      });
      this.swiper.on('transitionEnd', function (){
        /* let video = document.getElementById('myVideo') */
        let titoVideo = document.querySelector('.swiper-slide-active #myVideo')
        let glenVideo = document.querySelector('.swiper-slide-active #glenVideo')
        console.log('contains video', document.querySelector('.swiper-slide-active #myVideo'));
        if (titoVideo) {
          /* let vid = document.getElementById("myVideo") */
          let vid = $("#myVideo")
          console.log(vid); 
          vid[0].load()
          vid[0].play()
        } else {
          let vid = $("#myVideo")
          vid[0].pause();
        }
        if (glenVideo) {
          /* let vid = document.getElementById("myVideo") */
          let vid = $("#glenVideo")
          console.log(vid);
          vid[0].load()
          vid[0].play() 
        } else {
          let vid = $("#glenVideo")
          vid[0].pause();
        }
      }) 
      

    }, 2000);
  
    
  }


  swipeDown(e){
    console.log("SWIPEDOWN");
    
  }

  getPhotoID(photo){

   /*  console.log(photo); */
    
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
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.setAttribute('hidden','true')
    this.pop = false

  }

  pauseStories(e) {
    this.swiper.autoplay.stop();
    this.autoplay = !this.autoplay;
    let scroll_drag = document.querySelector(".swiper-scrollbar-drag");
    scroll_drag["style"].webkitAnimationPlayState = "paused";
  }
  playStories(e) {
    this.swiper.autoplay.start();
    this.autoplay = !this.autoplay;
    let scroll_drag = document.querySelector(".swiper-scrollbar-drag");
    scroll_drag["style"].webkitAnimationPlayState = "running";
  }

  hideGreetingDialog(e){
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.removeAttribute("hidden")
    console.log(navbar);
    
    this.pop = true
    let vid = $("#glenVideo")
    let vid1 = $("#myVideo")
    vid[0].pause();
    vid1[0].pause();
  }

  myFunction(e){
    console.log(e);
    
  }

  startAnimation(state){
    console.log(state);
    if (!this.animationState) {
      this.animationState = state
      
    }
    setTimeout(() => {
      this.showGreetingsDialog()
    }, 500);
  
    
  }

  resetAnimationState(){
    this.animationState = ''
  }

}


