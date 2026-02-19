import { Component } from '@angular/core';
import { LogoItem, LogoLoopComponent } from '../logo-loop/logo-loop';
import { RevealComponent } from "../reveal/reveal";

@Component({
  selector: 'app-partners',
  imports: [LogoLoopComponent, RevealComponent],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',
})
export class Partners {
  logos: LogoItem[] = [
    { src: '/assets/client-logo/air_force.png', alt: 'Air Force' },
    { src: '/assets/client-logo/army.png', alt: 'Army' },
    { src: '/assets/client-logo/cia.png', alt: 'CIA' },
    { src: '/assets/client-logo/darpa.png', alt: 'DARPA' },
    { src: '/assets/client-logo/defense.png', alt: 'Department of Defense' },
    { src: '/assets/client-logo/marine_corps.png', alt: 'Marine Corps' },
    { src: '/assets/client-logo/nasa_logo.png', alt: 'NASA' },
    { src: '/assets/client-logo/navy.png', alt: 'NAVY' },
    { src: '/assets/client-logo/security_agency.png', alt: 'National Security Agency' },
    { src: '/assets/client-logo/space_force.png', alt: 'United States Space Force' },
  ]
}
