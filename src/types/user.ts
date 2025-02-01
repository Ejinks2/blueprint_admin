export interface User {
  id: string;
  teamId: string;
  name: string;
  username: string;
  email: string;
  password: string;
  isActivate: boolean;
  dateJoined: string;
  roles: string[];
  team: string;
}
