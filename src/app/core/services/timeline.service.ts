import { Injectable } from '@angular/core';
import { TimelineItem } from '../model/timeline.model';

@Injectable({ providedIn: 'root' })
export class TimelineService {
  getItems(): TimelineItem[] {
    return [
 {
            date: '2000',
            title: 'Early Experimentation and First Flight',
            content: 'Stemmed from a lifelong passion for aerospace, spanning rocket science to aircraft design, the foundation of the company was built on early experimentation and hands-on innovation. This interest led to the development of unmanned aircraft systems focused on security, surveillance, and aerial filming. The first milestone was the creation of a single-rotor UAV powered by a nitromethane engine, designed and deployed for aerial imagery. This early platform established the technical groundwork and mission-driven approach that would guide the evolution of more advanced unmanned systems in the years to follow.',
            image: '/assets/images/1.jpg'
        },
        {
            date: '2002',
            title: 'Advancing Payload, Endurance, and Imaging',
            content: 'With early success validating both the platform and mission, operations formally advanced with the establishment of a legal entity under the name Remote Intelligence Labs (RIL). This period marked a transition from experimentation to structured development and early commercialization. Building on initial learnings, the next generation was developed as a heavy-payload, single-rotor UAV powered by a petrol engine, significantly expanding lift capacity, endurance, and overall operational capability. In parallel, a  2-axis mechanically stabilized camera gimbal, utilizing a dual-flywheel system within a hermetically sealed chamber, was engineered to deliver smoother, higher-quality aerial imagery and improved reconnaissance performance. Together, these milestones represented a critical step toward scalable, mission-ready unmanned systems.',
            image: '/assets/images/2.jpg'
        },
        {
            date: '2004',
            title: 'Part of a Defining Era in Autonomous Technology',
            content: 'As capabilities matured, RIL entered the national innovation stage by participating in the 2004 Department of Advanced Research Program Agency (DARPA) Grand Challenge. This milestone marked the company’s early involvement in advanced autonomous systems and complex unmanned operations, contributing to the broader evolution of autonomous vehicle technology. During this generation, RIL also achieved a significant technical breakthrough with the development of a 3-axis gyro–stabilized electro-optical gimbal, dramatically improving stabilization, targeting accuracy, and imaging performance. These advancements further positioned the organization at the forefront of autonomous sensing and unmanned system development.',
            image: '/assets/images/3.jpg'
        },
        {
            date: '2006',
            title: 'Scaling Capability Across Commercial and Defense Domains',
            content: 'As unmanned systems matured, development advanced toward platforms and payloads optimized for both cinematic and defence applications. Some of the first electric-powered single-rotor UAV was introduced, delivering quieter operation, improved reliability, and enhanced suitability for sensitive filming environments as well as tactical missions. During this period, a more advanced generation of gyro-stabilized electro-optical gimbals was developed and deployed across UAV platforms and professional film productions, enabling smooth, high-fidelity imagery and precise sensor control. Defense capabilities expanded with the development of a gyro-stabilized two-axis weapons turret, supporting accurate integration of mission-critical payloads for security and tactical operations. In parallel, the company entered the electronic warfare domain, advancing payload integration and platform concepts designed to support sensing and countermeasure missions. This phase also included a collaboration with Lockheed Martin on an advanced weaponized VTOL UAV, marking a significant step into next-generation defense platforms and reinforcing the company’s role in dual-use, electronic warfare, and military-grade unmanned systems.',
            image: '/assets/images/ril_photo4.JPG'
        },
        {
            date: '2008',
            title: 'Commercial Scaling and Advanced Autonomous Systems',
            content: 'Building on proven dual-use platforms, the company entered a phase of commercial scaling and advanced autonomy, expanding its technology portfolio into higher-reliability, mission-critical systems. During this period, an electronic remote camera control system was developed and adopted for specialized applications, including use by NASA Research Aims, demonstrating the adaptability and precision of the company’s imaging and control technologies. This also saw the development of a 3-axis, fully stabilized and aerodynamic electro-optical gimbal, designed for high-performance surveillance and operational resilience in demanding environments. Complementing the gimbal, an advanced remote command panel was engineered to provide precise, real-time control of both gimbal and camera systems. Expanding platform versatility, an unmanned dirigible equipped with video surveillance gimbal was successfully deployed, showcasing long-endurance aerial surveillance capabilities and further advancing next-generation defense and commercial reconnaissance solutions.',
            image: '/assets/images/4.jpg'
        },
        {
            date: '2010',
            title: 'Navigating Economic Disruption and Emerging Stronger',
            content: 'Following this period of rapid advancement, the 2009 global recession introduced a temporary slowdown in development and deployment as market conditions tightened across both commercial and defense sectors. Despite these challenges, core research and strategic planning continued, preserving critical technical expertise and long-term vision. As market conditions recovered, the company re-emerged with renewed focus and rebranded as SIStem Laboratories (SIS Labs), signaling a strategic evolution toward advanced defense capabilities. Under this new identity, SIS Labs accelerated efforts to modernize unmanned aerial vehicles for defense applications, emphasizing robustness, integration, and next-generation mission readiness. This phase marked a resilient transition from early innovation into a more focused role supporting modern defense and security operations.',
            image: '/assets/images/5.jpg'
        },
        {
            date: '2020',
            title: 'Resilience and Strategic Refocus',
            content: 'After more than a decade dedicated to research and development across both commercial and defense sectors, the company entered a new chapter by rebranding as Feather Dynamics, reflecting a broader vision for the future of unmanned and autonomous flight. Alongside continued defense innovation, strategic focus expanded into Advanced Air Mobility (AAM), targeting next-generation logistics, cargo transport, and scalable aerial operations. To support this growth, Feather Dynamics established a new research and development laboratory at the decommissioned military airbase in Monterey, California, providing a dedicated environment for rapid prototyping, flight testing, and systems integration. This milestone marked the transition into a modern era of innovation, positioning the company at the intersection of autonomous air power, logistics, and advanced mobility solutions.',
            image: '/assets/images/6.jpg'
        },
        {
            date: 'TODAY',
            title: 'Strengthening Foundations for Modern Defense Systems',
            content: 'Today, as the global security environment grows increasingly complex, from the ongoing conflict between Ukraine and Russia to escalating geopolitical tensions and emerging asymmetric threats facing the United States and its allied partners, Feather Dynamics has intensified its focus on defense innovation. The company is actively developing and deploying patent-pending, next-generation unmanned aerial systems engineered for modern and contested operational environments. These advanced UAVs deliver unmatched precision, agility, and mission adaptability, supporting intelligence, surveillance, reconnaissance, and tactical operations. In parallel, Feather Dynamics continues to advance unmanned logistics and transport platforms, designed to reliably deliver critical supplies to personnel on the ground in austere and high-risk conditions. This current phase underscores Feather Dynamics’ commitment to strengthening national and allied defense capabilities through proprietary technology and forward-looking unmanned solutions built for today’s evolving global threats.',
            image: '/assets/images/fd-skeleton.png'
        }
    ];
  }
}