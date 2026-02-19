import { Component } from '@angular/core';
import { LogoItem, LogoLoopComponent } from "../logo-loop/logo-loop";
import { RevealComponent } from "../reveal/reveal";

@Component({
  selector: 'app-tag',
  imports: [LogoLoopComponent, RevealComponent],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
    logos: LogoItem[] = [
      {label: "YOUR MISSION."},
      {label: "OUR MISSION."},
    ]
}
