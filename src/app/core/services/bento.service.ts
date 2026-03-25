import { Injectable } from "@angular/core";

export interface BentoImage {
    src: string;
    title?: string;
}

@Injectable({
    providedIn: 'root'
})
export class BentoService {
    getImages(): BentoImage[] {
return [
            {
                src: '/assets/images/ril_p3.JPG',
                title: 'Unmanned Dirigible National Security',
            },
            {
                src: '/assets/images/3.jpg',
                title: 'DARPA Grand Challenge',
            },
            {
                src: '/assets/images/ril_p11.jpg',
                title: 'Gen-1 3-Axis Gimbal',
            },
            {
                src: '/assets/images/ril_p1.jpg',
                title: '3-Axis EO-IR Dirigible',    
            },
            {
                src: '/assets/images/fd_team.jpg',
                title: 'Space & Missile Systems Center 2019',
            },
            {
                src: '/assets/images/ril_p6.JPG',
                title: 'Gen-4 EO/IR Gimbal & Control Panel',
            },
            {
                src: '/assets/images/ril_p5.jpg',
                title: 'Tethered Aerostat Aerial Imagery',
            },
            {
                src: '/assets/images/4.jpg',
                title: '20M UAV Dirigible National Security',
            },
            {
                src: '/assets/images/ril_p7.JPG',
                title: 'EO/IR Gimbal Ground Control Panel',
            },
            {
                src: '/assets/images/ril_photo6.JPG',
                title: 'Heavy-List Petrol Aerial Imagery',
            },
            {
                src: '/assets/images/ril_p2.jpg',
                title: 'Aerial Research Aerostat',
            },
            {
                src: '/assets/images/1.jpg',
                title: 'Ultralight 2-Axis Gimbal',
            },
            {
                src: '/assets/images/ril_p8.JPG',
                title: 'UAV Petrol Configuration',
            },
            // {
            //     src: '/assets/images/fd_ceo.jpg',
            //     title: 'Air Force and Space Day 2018',
            // },
            {
                src: '/assets/images/ril_p14.png',
                title: 'DARPA Grand Challenge Guide',
            },
            {
                src: '/assets/images/6.jpg',
                title: 'Monterey CA Lab',
            },
            {
                src: '/assets/images/ril_p9.JPG',
                title: 'Optical/IR Ground Control Panel',
            },
            {
                src: '/assets/images/2.jpg',
                title: 'NASA Research Aims',
            },
            {
                src: '/assets/images/ril_p4.jpg',
                title: 'Unmanned Helo Aerial Imagery',
            },
            {
                src: '/assets/images/5.jpg',
                title: 'Stealth Single-Rotor UAV Recon',
            },
            {
                src: '/assets/images/ril_photo1.jpg',
                title: 'First Electric Single-Rotor UAV',
            },
        ]
    }
}