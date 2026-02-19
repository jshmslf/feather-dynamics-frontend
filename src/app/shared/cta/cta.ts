import { Component } from '@angular/core';
import { RevealComponent } from "../reveal/reveal";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [RevealComponent, RouterModule],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class Cta {

}
