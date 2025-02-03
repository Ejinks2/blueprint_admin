import { Organization } from "./organization";
import { Member } from "./member";

export interface Team {
  id: string;
  name: string;
  organization: Organization;
  teamLeadId: Member;
  projectManagerId: Member;
  designer: Member;
}
