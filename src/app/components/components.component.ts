import { Component, OnInit, Renderer2, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

import { trigger, keyframes, animate, transition, state, style } from '@angular/animations'
import * as kf from './greetings/keyframes';
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css'],
    animations:[
        trigger('PamAnimator', [
            transition('* => slideLeft', animate(3000, keyframes(kf.slideLeft)))
        ]),
        /* trigger('colorAnimator', [
            transition(':enter', animate(1000, keyframes(kf.pulse)))
        ]) */
    ]
})

export class ComponentsComponent implements OnInit, OnDestroy, AfterViewInit {
    animationState: string
    state: string;
    data : Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    constructor( private renderer : Renderer2, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');

        var x = 0;
        var images = ['profile_pic1.jpg', 'profile_pic2.jpg', 'profile_pic3.jpg', 'profile_pic4.jpg', 'profile_pic5.png', 'profile_pic6.png', 'profile_pic7.gif']

        setInterval(function () {
            if (x > images.length-1) {
                x = 0
            }
            let img = document.getElementById('profile_pic');
            img.setAttribute('src', "assets/img/pam/" + images[x]);
            x++
        }, 500);

    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }

    ngAfterViewInit() {
        this.state = 'pulse';
    }

    colorize(){
        var galleryArr = document.querySelectorAll('.image-gallery figure')
        galleryArr.forEach(el=>{
            el.classList.toggle('sepia')
        })
        document.querySelector('.img-8 span').classList.toggle('pulse')

    }

    startAnimation(state) {
        console.log(state);
        if (!this.animationState) {
            this.animationState = state

        }
    }
    resetAnimationState() {
        this.animationState = ''
    }

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        // visible height + pixel scrolled >= total height 
        console.log(event.target.scrollHeight);
        
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            console.log("End");
        }
    }

    @HostListener('document:scroll')
    scrollFunction(){
        /* let greetings = document.querySelector('.section-greeting-card').scrollHeight */
        let TotalWindow = document.documentElement.offsetHeight
        let currentPos = Math.round((window.pageYOffset / TotalWindow) * 100)
        console.log(currentPos)
        
        
        /* if (currentPos == 90) {
            document.querySelector('.hero-images-container').classList.add('fadeIn')
        } */
    }

}


