import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  private baseUrlVoucher = environment.backendUrl + 'voucher';

  constructor(private http: HttpClient) { }

  // this method shall return vouchers that are not expired to reduce data sending overhead.
  getVouchersWithoutFilter(page: number): Observable<any> {
    return this.http.get(`${this.baseUrlVoucher}/`, { params: { page: page + '', page_size: '10' } });
  }

  uploadEmailList(emailListInCsv: any): Observable<any> {
    return this.http.post(`${this.baseUrlVoucher}/addEmails/`, emailListInCsv);
  }

  uploadCodeList(codeListInCsv: any): Observable<any> {
    return this.http.post(`${this.baseUrlVoucher}/addCodes/`, codeListInCsv);
  }

  uploadBothFiles(filesInFormData: any): Observable<any> {
    return this.http.post(`${this.baseUrlVoucher}/uploadBothFiles`, filesInFormData);
  }

  getNumCodes(id: any): Observable<any> {
    return this.http.get(`${this.baseUrlVoucher}/${id}/getNumCodes/`);
  }

  getOrganizationInVoucher(): Observable<any> {
    return this.http.get(`${this.baseUrlVoucher}/organization`);
  }

  getVoucherTypes(): Observable<any> {
    return this.http.get(`${this.baseUrlVoucher}/type`);
  }

  getVoucherList(filterParams: any): Observable<any> {
    return this.http.get(`${this.baseUrlVoucher}/`, { params: filterParams });
  }

  getVoucherById(id: string): Observable<object> {
    return this.http.get(`${this.baseUrlVoucher}/${id}`);
  }

  getVoucherByEmail(email: any): Observable<object> {
    return this.http.get(`${this.baseUrlVoucher}/${email}/getCodeByEmails/`);
  }

  getCodeByCodeList(id: any): Observable<object> {
    return this.http.get(`${this.baseUrlVoucher}/${id}/getCodeByCodeList/`);
  }

  createVoucher(voucher: any): Observable<object> {
    return this.http.post(`${this.baseUrlVoucher}/`, voucher);
  }

  updateVoucher(id: string, voucher: any): Observable<object> {
    return this.http.put(`${this.baseUrlVoucher}/${id}`, voucher);
  }

  patchVoucher(id: string, voucher: any): Observable<object> {
    return this.http.patch(`${this.baseUrlVoucher}/${id}`, voucher);
  }

  deleteVoucher(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrlVoucher}/${id}`);
  }

  deleteAllVoucher(): Observable<any> {
    return this.http.delete(`${this.baseUrlVoucher}`);
  }

}
