export interface Event {
  name: string;
  organizer: string;
  date: string; // Format: MM/DD/YYYY
  location: string;
  budget: number;
  eventType: "workshop" | "meeting" | "gmb" | "ebm";
}
