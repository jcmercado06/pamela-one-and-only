import { Component, OnInit, Inject, Renderer2, ElementRef, OnDestroy, NgZone, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GreetingsService } from '../../services/greetings.service'
import { Observable} from 'rxjs'

declare var $: any;
declare var Swiper: any;
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit, OnDestroy{
  api_key = 'AIzaSyBkRGjjHlTM2vexmL6NvmMlKKEseQx0wew'
  sheet_id = '1OX1rW7PlL1XQxdlgjXQf3FACXPev1WELxeySzXqv-J4'
  sheet = 'Form Responses 1'
  greetings;

  constructor(
    private element: ElementRef,
    private greetingService: GreetingsService
  ) { }

  
  ngOnInit() {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];

    navbar.classList.remove('navbar-transparent');

    this.greetingService.getAnswers().subscribe(data => this.greetings = data)

    console.log("data",this.greetings);
    
    
    
    
  }

  ngOnDestroy() {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];

  }

  ngAfterViewInit() {
    var swiper = new Swiper($('.swiper-container'), {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        snapOnRelease: false
      },
      speed: 600,
      parallax: true,
      /* pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, */
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      /* autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }, */
    })

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



 




}
