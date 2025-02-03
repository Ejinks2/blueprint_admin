import { Member } from "./member";

export interface Event {
  name: string;
  organizer: Member;
  date: string; // Format: MM/DD/YYYY
  location: string;
  budget: number;
  eventType: "workshop" | "meeting" | "gmb" | "ebm";
}
