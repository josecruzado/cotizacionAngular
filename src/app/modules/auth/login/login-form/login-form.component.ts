import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  username: string;
  password:string;
  returnUrl: string;

  constructor(private route: ActivatedRoute,private router: Router,public authService:AuthService ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(f:NgForm){
    
    const loginObserver = {
      next: x => {
        this.router.navigateByUrl(this.returnUrl);
        console.log(x);
        
      },
      error: err => console.log(err),
    };
    this.authService.login(f.value).subscribe(loginObserver);
  }

}
