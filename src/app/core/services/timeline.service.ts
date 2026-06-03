import { Injectable } from '@angular/core';
import { TimelineItem } from '../model/timeline.model';

@Injectable({ providedIn: 'root' })
export class TimelineService {
  getItems(): TimelineItem[] {
    return [
 {
            date: '2000',
            title: 'Early Experimentation and First Flight',
            content: "Built on a lifelong passion for aerospace, the company's foundation came from hands-on innovation in unmanned systems for security, surveillance, and aerial filming, culminating in the first single-rotor UAV powered by a nitromethane engine.",
            image: '/assets/images/1.jpg'
        },
        {
            date: '2002',
            title: 'Advancing Payload, Endurance, and Imaging',
            content: 'Operations formalized under Remote Intelligence Labs (RIL), introducing a heavy-payload petrol-powered UAV and a mechanically stabilized dual-flywheel camera gimbal, marking the transition from experimentation to structured, mission-ready development.',
            image: '/assets/images/2.jpg'
        },
        {
            date: '2004',
            title: 'Part of a Defining Era in Autonomous Technology',
            content: 'RIL participated in the 2004 Department of Advanced Research Program Agency (DARPA) Grand Challenge and achieved a breakthrough with a 3-axis gyro-stabilized electro-optical gimbal, positioning the company at the forefront of autonomous sensing.',
            image: '/assets/images/3.jpg'
        },
        {
            date: '2006',
            title: 'Scaling Capability Across Commercial and Defense Domains',
            content: 'Expanded into electric UAV platforms, advanced gyro-stabilized gimbals, a gyro-stabilized two-axis weapons turret, electronic warfare payload integration, and a collaboration with Lockheed Martin on a weaponized VTOL UAV.',
            image: '/assets/images/ril_photo4.JPG'
        },
        {
            date: '2008',
            title: 'Commercial Scaling and Advanced Autonomous Systems',
            content: 'Grew the technology portfolio with a camera control system adopted by NASA Research Aims, a fully stabilized aerodynamic electro-optical gimbal, and an unmanned dirigible for long-endurance aerial surveillance.',
            image: '/assets/images/4.jpg'
        },
        {
            date: '2010',
            title: 'Navigating Economic Disruption and Emerging Stronger',
            content: 'Weathered the 2009 recession and re-emerged as SIStem Laboratories (SIS Labs), refocusing on modern defense UAV development and next-generation mission readiness.',
            image: '/assets/images/5.jpg'
        },
        {
            date: '2020',
            title: 'Resilience and Strategic Refocus',
            content: 'Rebranded as Feather Dynamics, expanded into Advanced Air Mobility, and established an R&D laboratory at a decommissioned military airbase in Monterey, California.',
            image: '/assets/images/6.jpg'
        },
        {
            date: 'TODAY',
            title: 'Strengthening Foundations for Modern Defense Systems',
            content: 'Feather Dynamics is actively developing patent-pending UAVs engineered for contested environments, supporting ISR and tactical operations, while advancing unmanned logistics platforms for austere and high-risk conditions.',
            image: '/assets/images/fd-skeleton.png'
        }
    ];
  }
}