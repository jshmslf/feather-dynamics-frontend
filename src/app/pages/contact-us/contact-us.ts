import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  CheckCircle,
  Info,
  LucideAngularModule,
  Mail,
  MapPin,
  PenLine,
  Phone,
  Send,
  User,
  XCircle
} from 'lucide-angular';
import { PageHeader } from '../../shared/page-header/page-header';
import { LogoItem, LogoLoopComponent } from '../../shared/logo-loop/logo-loop';
import { RevealComponent } from '../../shared/reveal/reveal';
import { ContactService } from '../../core/services/contact.service';
import { SeoService } from '../../core/services/seo.service';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PageHeader,
    LucideAngularModule,
    LogoLoopComponent,
    RevealComponent
  ],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs implements OnInit, AfterViewInit, OnDestroy {

  // ── Lucide icons ──────────────────────────────────────────────
  readonly mail        = Mail;
  readonly map_pin     = MapPin;
  readonly user        = User;
  readonly phone       = Phone;
  readonly info        = Info;
  readonly penline     = PenLine;
  readonly send        = Send;
  readonly checkCircle = CheckCircle;
  readonly xCircle     = XCircle;

  // ── View refs for scroll animations ──────────────────────────
  @ViewChild('infoPanel')  infoPanel!:  ElementRef;
  @ViewChild('infoEyebrow') infoEyebrow!: ElementRef;
  @ViewChild('infoTitle')  infoTitle!:  ElementRef;
  @ViewChild('infoLead')   infoLead!:   ElementRef;
  @ViewChild('infoItems')  infoItems!:  ElementRef;
  @ViewChild('formPanel')  formPanel!:  ElementRef;

  // ── Form state ────────────────────────────────────────────────
  formData: FormData = {
    name: '', email: '', phone: '',
    subject: '', message: '', consent: false
  };

  nameValue    = '';
  emailValue   = '';
  phoneValue   = '';
  subjectValue = '';
  messageValue = '';

  // ── Submission state ──────────────────────────────────────────
  isLoading    = false;
  popupVisible = false;
  popupType: 'success' | 'error' = 'success';
  popupMessage = '';

  // ── Logo loop ─────────────────────────────────────────────────
  logos: LogoItem[] = [
    { label: 'YOUR VISION IS OUR MISSION.' },
  ];

  isBrowser: boolean;
  private observer!: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private contactService: ContactService,
    private seo: SeoService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Contact Us | Feather Dynamics',
      description: 'Get in touch with Feather Dynamics for inquiries about our autonomous vehicle solutions, defense technology, or partnership opportunities. Our team is ready to discuss your next-generation UAV projects.',
      keywords: 'contact Feather Dynamics, UAV inquiry, autonomous vehicle company contact, defense technology partners, unmanned systems consultation, feather dynamics contact form, military drone technology, autonomous cargo delivery, VTOL aircraft development, aerospace innovation contact, feather dynamics support, defense contractor contact, UAV research and development, autonomous flight systems, next-gen unmanned vehicles, feather dynamics partnership, military robotics contact, autonomous vehicle consulting, defense innovation contact, feather dynamics engineering, UAV design collaboration, autonomous system development, feather dynamics technical support, defense technology solutions, feather dynamics sales, UAV technology contact, autonomous vehicle research, feather dynamics customer service, defense systems contact, UAV development partners, feather dynamics engineering contact, autonomous flight technology, feather dynamics innovation, defense technology partners, UAV industry contact, feather dynamics corporate contact, autonomous vehicle development, feather dynamics defense solutions, UAV research contact, feather dynamics aerospace contact'
    })
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      setTimeout(() => this.initScrollObserver(), 100);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.observer) {
      this.observer.disconnect();
    }
  }

  private initScrollObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.12 });

    [this.infoEyebrow, this.infoTitle, this.infoLead, this.infoItems, this.formPanel]
      .forEach(ref => { if (ref?.nativeElement) this.observer.observe(ref.nativeElement); });
  }

  // ── Submit ────────────────────────────────────────────────────
  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.consent) {
      this.showPopup('error', 'Please fill in all required fields and accept the data policy.');
      return;
    }

    this.isLoading = true;

    this.contactService.send({
      name:    this.formData.name,
      email:   this.formData.email,
      phone:   this.formData.phone,
      subject: this.formData.subject,
      message: this.formData.message,
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.showPopup('success', "Your message has been sent. We'll be in touch within one business day.");
        this.resetForm();
      },
      error: () => {
        this.isLoading = false;
        this.showPopup('error', 'Something went wrong. Please try again or email us directly.');
      }
    });
  }

  showPopup(type: 'success' | 'error', message: string): void {
    this.popupType    = type;
    this.popupMessage = message;
    this.popupVisible = true;
  }

  closePopup(): void { this.popupVisible = false; }

  private resetForm(): void {
    this.formData    = { name: '', email: '', phone: '', subject: '', message: '', consent: false };
    this.nameValue   = '';
    this.emailValue  = '';
    this.phoneValue  = '';
    this.subjectValue = '';
    this.messageValue = '';
  }
}