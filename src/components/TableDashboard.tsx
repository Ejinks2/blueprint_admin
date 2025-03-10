import { Table, Thead, Tbody, Tr, Th, TableContainer, HStack } from "@chakra-ui/react";
import { Member } from "../types/member";
import Sidebar from "./Sidebar";

function TableDashboard({ members }: { members: Member[] }): JSX.Element {
  return (
    <HStack height="100vh" spacing="2">
      <Sidebar />
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Title</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {members
              .sort((a: Member, b: Member) => {
                return a.name.localeCompare(b.name);
              })
              .filter((user: Member) => !user.isActive)
              .map(
                (
                  { name, email, isActive }: Member, // Add type annotation for User
                ) => (
                  <Tr key={email}>
                    <Th>{name}</Th>
                    <Th>{email}</Th>
                    <Th></Th>
                    <Th>{isActive ? "Active" : "Inactive"}</Th>
                  </Tr>
                ),
              )}
          </Tbody>
        </Table>
      </TableContainer>
    </HStack>
  );
}

export default TableDashboard;
