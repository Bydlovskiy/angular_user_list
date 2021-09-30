import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList: Array<user> = [
    {login : 'petro1999',password: '1999Petro',email: 'petro1999@gmail.com'},
    {login : 'Andriy88',password: 'Anrey1488',email: 'Anrey1488@gmail.com'},
    {login : 'Ivan',password: 'Ivan1111',email: 'Ivan1111@ukr.net'},
  ];

  public login !: string;
  public password !: string;
  public email !: string;

  public newLogin !: string;
  public newPassword !: string;
  public newEmail !: string;
  public isEdit: boolean = false;

  public delete = true;
  public index !: number;

  public loginPlaceholder: string = 'Enter login';
  public passwordPlaceholder: string = 'Enter password';
  public emailPlaceholder: string = 'Enter email';

  public loginValidStyle = '';
  public passwordValidStyle = '';
  public emailValidStyle = '';


  constructor() { }

  ngOnInit(): void {
  }
  public addUser(): void {
    const login: boolean = this.loginValidation();
    const password: boolean = this.passwordValidation();
    const email: boolean = this.emailValidation();
    if (login && password && email) {
      this.createUserAccount();
      this.userList.push(this.createUserAccount());
      this.resetForm();
    }
  }


  private createUserAccount(): user {
    let user: user = {
      login: this.login,
      password: this.password,
      email: this.email
    }
    return user
  }

  public deleteUser(index: number): void {
    this.userList.splice(index, 1);
  }

  public editUser(index: number) {
    this.login = this.userList[index].login;
    this.password = this.userList[index].password;
    this.email = this.userList[index].email;
    this.isEdit = true;
    this.index = index;
  }

  public updateUser() {
    this.userList[this.index].login = this.login;
    this.userList[this.index].password = this.password;
    this.userList[this.index].email = this.email;
    this.isEdit = false;
    this.resetForm();
  }

  private resetForm() {
    this.login = '';
    this.password = '';
    this.email = '';
    this.loginPlaceholder = 'Enter login';
    this.loginValidStyle = '';
    this.passwordPlaceholder = 'Enter password';
    this.passwordValidStyle = '';
    this.emailPlaceholder = 'Enter email';
    this.emailValidStyle = ''

  }

  private loginValidation(): boolean {
    const VALIDATION: RegExp = /^[a-zA-Z]{4,16}$/;
    if (VALIDATION.test(this.login)) {
      this.loginPlaceholder = 'Enter login';
      this.loginValidStyle = '';
      return true
    } else {
      this.login = ''
      this.loginPlaceholder = 'Wrong login!';
      this.loginValidStyle = '1px solid red';
      return false
    }
  }

  private passwordValidation(): boolean {
    const VALIDATION: RegExp = /^[0-9a-zA-Z_\-\.]{4,16}$/
    if (VALIDATION.test(this.password)) {
      this.passwordPlaceholder = 'Enter password';
      this.passwordValidStyle = '';
      return true;
    } else {
      this.password = ''
      this.passwordPlaceholder = 'Wrong password!';
      this.passwordValidStyle = '1px solid red';
      return false
    }
  }

  private emailValidation(): boolean {
    const VALIDATION: RegExp = /^([0-9a-zA-Z\-\.]+)@([0-9a-zA-Z\-]+)\.([a-z]+)$/
    if (VALIDATION.test(this.email)) {
      this.emailPlaceholder = 'Enter email';
      this.emailValidStyle = ''
      return true
    } else {
      this.email = ''
      this.emailPlaceholder = 'Wrong email!';
      this.emailValidStyle = '1px solid red';
      return false
    }
  }
}

interface user {
  login: string;
  password: string;
  email: string;
}
