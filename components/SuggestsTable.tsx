import { Table } from "@mantine/core";

export const SuggestsTable = ({
  suggests,
}: {
  suggests: { c: string; list: string[] }[];
}) => {
  return (
    <Table>
      <Table.Tbody>
        {suggests.map((suggest) => (
          <>
            <Table.Tr>
              <Table.Th>{`+${suggest.c}`}</Table.Th>
            </Table.Tr>
            {suggest.list.map((s) => (
              <>
                <Table.Tr>
                  <Table.Td>{s}</Table.Td>
                </Table.Tr>
              </>
            ))}
          </>
        ))}
      </Table.Tbody>
    </Table>
  );
};
