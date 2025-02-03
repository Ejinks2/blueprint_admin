import { Member } from "./member";

export interface Organization {
  id: string;
  name: string;
  teamLeadId: Member;
  projectManagerId: Member;
}
