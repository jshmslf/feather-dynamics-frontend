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
  imports: [CommonModule, FormsModule, PageHeader, LucideAngularModule, LogoLoopComponent, RevealComponent],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs implements OnInit, AfterViewInit, OnDestroy {

  // Lucide icons
  readonly mail = Mail;
  readonly map_pin = MapPin;
  readonly user = User;
  readonly phone = Phone;
  readonly info = Info;
  readonly penline = PenLine;
  readonly send = Send;
  readonly checkCircle = CheckCircle;
  readonly xCircle = XCircle;

  // View refs for scroll animations
  @ViewChild('infoPanel') infoPanel!: ElementRef;
  @ViewChild('infoEyebrow') infoEyebrow!: ElementRef;
  @ViewChild('infoTitle') infoTitle!: ElementRef;
  @ViewChild('infoLead') infoLead!: ElementRef;
  @ViewChild('infoItems') infoItems!: ElementRef;
  @ViewChild('formPanel') formPanel!: ElementRef;

  // Form state
  formData: FormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  };

  // Track if field has value (for label animation)
  nameValue = '';
  emailValue = '';
  phoneValue = '';
  subjectValue = '';
  messageValue = '';

  // Submission state
  isLoading = false;
  popupVisible = false;
  popupType: 'success' | 'error' = 'success';
  popupMessage = '';

  // Logo loop
  logos: LogoItem[] = [
    { label: 'YOUR MISSION.' },
    { label: 'OUR MISSION.' },
  ];

  isBrowser: boolean;
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {}

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
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.12 });

    const targets = [
      this.infoEyebrow,
      this.infoTitle,
      this.infoLead,
      this.infoItems,
      this.formPanel
    ];

    targets.forEach(ref => {
      if (ref?.nativeElement) {
        this.observer.observe(ref.nativeElement);
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (!this.formData.name || !this.formData.email || !this.formData.consent) {
      this.showPopup('error', 'Please fill in all required fields and accept the data policy.');
      return;
    }

    this.isLoading = true;

    // Simulate async submit — replace with your real HTTP call
    await new Promise(resolve => setTimeout(resolve, 1800));

    this.isLoading = false;

    // Simulate success/failure (swap to real response handling)
    const success = true;

    if (success) {
      this.showPopup('success', 'Your message has been sent. We\'ll be in touch within one business day.');
      this.resetForm();
    } else {
      this.showPopup('error', 'Something went wrong. Please try again or email us directly.');
    }
  }

  showPopup(type: 'success' | 'error', message: string): void {
    this.popupType = type;
    this.popupMessage = message;
    this.popupVisible = true;
  }

  closePopup(): void {
    this.popupVisible = false;
  }

  private resetForm(): void {
    this.formData = { name: '', email: '', phone: '', subject: '', message: '', consent: false };
    this.nameValue = '';
    this.emailValue = '';
    this.phoneValue = '';
    this.subjectValue = '';
    this.messageValue = '';
  }
}