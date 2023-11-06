import {
  Button,
  ChakraProvider,
  extendTheme as chakraExtendTheme,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme as muiCreateTheme,
  THEME_ID,
} from "@mui/material/styles";
import { useDisclosure } from "@chakra-ui/react";


const chakraTheme = chakraExtendTheme();
const materialTheme = muiCreateTheme();

function App() {
  const { onOpen } = useDisclosure()
  return (
      <ChakraProvider theme={chakraTheme} resetCSS>
        <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              <Flex flexDir={"column"} gap={"1rem"}>
                <Button colorScheme="yellow" onClick={() => onOpen}>
                  Open Material UI's DatePicker
                </Button>
                <Flex justifyContent={"center"}>
                  <MobileTimePicker onOpen={onOpen}/>
                </Flex>
              </Flex>
            </Flex>
          </LocalizationProvider>
        </MaterialThemeProvider>
      </ChakraProvider>
  );
}

export default App;
