declare namespace API {
  interface User {
    name: string;
    role: (typeof UserRole)[number];
  }
}
const UserRole = <const>['default', 'newUser', 'blackFriday', 'promotion'];
