import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
    private readonly endpoint = `${environment.apiUrl}/api/v1/contact`;

    constructor(private http: HttpClient) {}

    send(payload: ContactPayload): Observable<{ success: boolean }> {
        const fd = new FormData();
        fd.append('name',    payload.name);
        fd.append('email',   payload.email);
        fd.append('phone',   payload.phone   ?? '');
        fd.append('subject', payload.subject ?? '');
        fd.append('message', payload.message ?? '');
        return this.http.post<{ success: boolean }>(this.endpoint, fd);
    }
}