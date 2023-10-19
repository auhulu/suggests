import {
  ActionIcon,
  Box,
  Center,
  Group,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SuggestsTable } from "../components/SuggestsTable";
import { searchSuggests } from "../libs/searchSuggest";

export default function IndexPage() {
  const [query, setQuery] = useState("");
  const mutation = useMutation({ mutationFn: () => searchSuggests(query) });
  const isMobile = useMediaQuery("(max-width: 36em)");
  return (
    <Stack>
      <Center>
        <Title>Suggests Scraper</Title>
      </Center>
      <TextInput
        rightSection={
          <ActionIcon
            variant="transparent"
            color="gray"
            loading={mutation.isPending}
            onClick={() => mutation.mutate()}
          >
            <IconSearch />
          </ActionIcon>
        }
        variant="filled"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        onKeyDown={(e) => {
          if (!e.nativeEvent.isComposing && e.key === "Enter")
            mutation.mutate();
        }}
      />
      {mutation.isSuccess && !isMobile && (
        <Group grow align="start">
          <Box>
            <SuggestsTable suggests={mutation.data.suggests.slice(0, 47)} />
          </Box>
          <Box>
            <SuggestsTable suggests={mutation.data.suggests.slice(47)} />
          </Box>
        </Group>
      )}
      {mutation.isSuccess && isMobile && (
        <SuggestsTable suggests={mutation.data.suggests} />
      )}
    </Stack>
  );
}
