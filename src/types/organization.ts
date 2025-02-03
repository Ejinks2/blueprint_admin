import { Member } from "./member";
import { Team } from "./team";

export interface Organization {
  id: string;
  name: string;
  team: Team;
  teamLeadId: Member;
  projectManagerId: Member;
}
