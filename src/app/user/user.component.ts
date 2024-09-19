// <-- Using Signal Input -->
// import { Component, computed, input } from "@angular/core";

// @Component({
//       selector: 'app-user',
//       standalone: true,
//       imports: [],
//       templateUrl: './user.component.html',
//       styleUrl: './user.component.css'
//     })

//     export class UserComponent {
//       // avatar = input<string>();
//       avatar = input.required<string>();
//       name = input.required<string>();
//       // Signals are readonly so you can't change name & avatar from here!!

//       imagePath = computed(() => {
//         return 'assets/users/' + this.avatar();
//       })
//       // get imagePath() {
//       //   return 'assets/users/' + this.avatar;
//       // }
        
//       onSelectUser() {}
//     }

// <-- Using Normal Input -->
import { Component, EventEmitter, Input, output, Output } from "@angular/core";
import { type User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }


@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
  })

export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  // select = output<string>(); // Same like above line & this does not create any signal or something like that

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // @Output() select = new EventEmitter<string>(); //This helps to define that the ouput will be of string and if tried to output a no. then throws error
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}


// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   // selectedUser = DUMMY_USERS[randomIndex];
//   selectedUser = signal(DUMMY_USERS[randomIndex]);

//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser.avatar
//   // }
//   imagePath = computed(() => 'assets/users/'+ this.selectedUser().avatar);

//   onSelectUser() {
//     // console.log('Clicked!');
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }
