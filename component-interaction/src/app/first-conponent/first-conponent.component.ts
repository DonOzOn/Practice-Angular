import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-first-conponent',
  templateUrl: './first-conponent.component.html',
  styleUrls: ['./first-conponent.component.scss'],
})
export class FirstConponentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  send() {
    console.log('abc')
    this.router.navigate(['/progress']);
  }
}
