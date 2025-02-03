import { Member } from "../types/member";
import { Team } from "../types/team";
import { Organization } from "../types/organization";
import { Event } from "../types/events";

const members: Member[] = [
  {
    id: "1",
    name: "Alice Johnson",
    username: "alicej",
    email: "alice@example.com",
    isActive: true,
    dateJoined: "2023-04-15",
    roles: ["Developer", "Frontend"],
    team: "UI Team",
  },
  {
    id: "2",
    name: "Bob Smith",
    username: "bobsmith",
    email: "bob@example.com",
    isActive: true,
    dateJoined: "2022-08-22",
    roles: ["Project Manager"],
    team: "Backend Team",
  },
  {
    id: "3",
    name: "Charlie Brown",
    username: "charlieb",
    email: "charlie@example.com",
    isActive: false,
    dateJoined: "2021-05-10",
    roles: ["Designer"],
    team: "UI Team",
  },
  {
    id: "4",
    name: "Diana White",
    username: "dianaw",
    email: "diana@example.com",
    isActive: true,
    dateJoined: "2020-10-12",
    roles: ["Team Lead", "Backend"],
    team: "Backend Team",
  },
];

const organizations: Organization[] = [
  {
    id: "org1",
    name: "Tech Innovators",
    teamLeadId: members[3],
    projectManagerId: members[1],
  },
  {
    id: "org2",
    name: "Creative Solutions",
    teamLeadId: members[0],
    projectManagerId: members[1],
  },
];

const teams: Team[] = [
  {
    id: "team1",
    name: "UI Team",
    organization: organizations[1],
    teamLeadId: members[0],
    projectManagerId: members[1],
    designer: members[2],
  },
  {
    id: "team2",
    name: "Backend Team",
    organization: organizations[0],
    teamLeadId: members[3],
    projectManagerId: members[1],
    designer: members[2],
  },
];

const events: Event[] = [
  {
    name: "Tech Conference 2025",
    organizer: "Alice Johnson",
    date: "03/15/2025",
    location: "San Francisco, CA",
    budget: 50000,
    eventType: "workshop",
  },
  {
    name: "Monthly Team Meeting",
    organizer: "Bob Smith",
    date: "02/10/2025",
    location: "Virtual (Zoom)",
    budget: 0,
    eventType: "meeting",
  },
  {
    name: "Annual Hackathon",
    organizer: "Charlie Brown",
    date: "07/20/2025",
    location: "New York City, NY",
    budget: 75000,
    eventType: "gmb",
  },
  {
    name: "Design Thinking Workshop",
    organizer: "Diana White",
    date: "05/05/2025",
    location: "Seattle, WA",
    budget: 15000,
    eventType: "workshop",
  },
  {
    name: "Company Holiday Party",
    organizer: "HR Team",
    date: "12/18/2025",
    location: "Los Angeles, CA",
    budget: 30000,
    eventType: "gmb",
  },
];

export { members, organizations, teams, events };
