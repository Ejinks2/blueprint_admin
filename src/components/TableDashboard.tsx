import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer
} from '@chakra-ui/react'

function TableDashboard (): JSX.Element {
  return (
    <TableContainer>
        <Table variant='simple'>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Title</Th>
                    <Th>Status</Th>
                </Tr>
            </Thead>
        </Table>
    </TableContainer>
  )
}

export default TableDashboard
