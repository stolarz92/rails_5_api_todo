import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOutUser().subscribe(() => null)
  }
}
