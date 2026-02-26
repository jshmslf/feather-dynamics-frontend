import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { WhoWeAre } from "../../shared/who-we-are/who-we-are";
import { WhatWeDo } from "../../shared/what-we-do/what-we-do";
import { Cta } from "../../shared/cta/cta";
import { Partners } from "../../shared/partners/partners";
import { Tag } from "../../shared/tag/tag";
import { Blog } from "../../shared/blog/blog";
import { AboutUs } from "../../shared/about-us/about-us";
import { ResearchDevelopmentComponent } from "../../shared/research-development/research-development";

@Component({
  selector: 'app-home',
  imports: [Hero, WhoWeAre, WhatWeDo, Cta, Partners, Tag, Blog, AboutUs, ResearchDevelopmentComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
