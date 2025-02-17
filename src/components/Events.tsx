import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
  HStack,
} from "@chakra-ui/react";
import { Event } from "../types/events";
import Sidebar from "./Sidebar";

function Events({ events }: { events: Event[] }): JSX.Element {
  return (
    <HStack height="100vh" spacing="2">
      <Sidebar />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Event Name</Th>
              <Th>Organizer</Th>
              <Th>Date</Th>
              <Th>Location</Th>
              <Th>Budget</Th>
              <Th>Type of Event</Th>
            </Tr>
          </Thead>
          <Tbody>
            {events.map(
              ({ name, organizer, date, location, budget, eventType }) => (
                <Tr key={name}>
                  <Td>{name}</Td>
                  <Td>{organizer.name}</Td>
                  <Td>{date}</Td>
                  <Td>{location}</Td>
                  <Td>{budget}</Td>
                  <Td>{eventType}</Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </HStack>
  );
}

export default Events;
