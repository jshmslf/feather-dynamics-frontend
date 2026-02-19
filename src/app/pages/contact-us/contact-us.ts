import { Component } from '@angular/core';
import { PageHeader } from "../../shared/page-header/page-header";
import { Info, LucideAngularModule, Mail, MapPin, PenLine, Phone, Send, User } from 'lucide-angular';
import { LogoItem, LogoLoopComponent } from "../../shared/logo-loop/logo-loop";
import { RevealComponent } from "../../shared/reveal/reveal";

@Component({
  selector: 'app-contact-us',
  imports: [PageHeader, LucideAngularModule, LogoLoopComponent, RevealComponent],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  readonly mail = Mail;
  readonly map_pin = MapPin;
  readonly user = User;
  readonly phone = Phone;
  readonly info = Info;
  readonly penline = PenLine;
  readonly send = Send;

  logos: LogoItem[] = [
    {label: "YOUR MISSION."},
    {label: "OUR MISSION."},
  ]
}
