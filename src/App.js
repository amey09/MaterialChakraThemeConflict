import { Button, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function App() {
  return (
    <ChakraProvider>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <Flex
        height={"100svh"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={"1.5rem"}
        bgColor={"green.100"}
      >
        <Heading>Chakra UI / Material UI</Heading>
        <Text color={"red.300"}>Theme Conflict issue !</Text>
        <Text>
          Uncomment LocalizationProvider and Mobile TimePicker to trigger the
          issue
        </Text>
        <Flex flexDir={"column"}>
          <Button colorScheme="yellow">
            Try using Material UI's DatePicker
          </Button>
          <Flex>
            {/* <MobileTimePicker defaultValue={dayjs("2022-04-17T15:30")} /> */}
          </Flex>
        </Flex>
      </Flex>
      {/* </LocalizationProvider> */}
    </ChakraProvider>
  );
}

export default App;
