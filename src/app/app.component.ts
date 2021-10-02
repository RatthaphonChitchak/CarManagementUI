import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'หน้าแรก', url: '/client/index', icon: 'mail' },
    { title: 'สินค้า', url: '/folder/Customer', icon: 'paper-plane' },
    { title: 'ตะกร้า', url: '/folder/Market', icon: 'heart' },
    { title: 'แจ้งชำระเงิน', url: '/folder/Payment', icon: 'archive' },
    { title: 'เกี่ยวกับเรา', url: '/folder/About', icon: 'trash' },
    { title: 'ติดต่อ', url: '/folder/Contact', icon: 'warning' },
  ];

  constructor() {}
}

