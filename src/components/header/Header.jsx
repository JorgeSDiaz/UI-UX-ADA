import { Box, ButtonGroup, Button, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height={"50vh"}
      py={12}
      bgImage="/src/pexels-pixabay-50594.jpg"
      bgPosition="center"
      bgRepeat="no-repeat"
      mb={2}
    >
      <div>
        <Heading
          as="h1"
          size="4Xl"
          noOfLines={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          py={4}
        >
          DOMINA EL TERRENO
        </Heading>
        <Box display="flex" alignItems="center" justifyContent="center">
          <ButtonGroup gap="4" variant="outline">
            <Button
              colorScheme="whiteAlpha"
              height="60px"
              _hover={{ bg: "#ebedf0", color: "black" }}
            >
              VER DETALLES
            </Button>
            <Button
              colorScheme="whiteAlpha"
              height="60px"
              _hover={{ bg: "#ebedf0", color: "black" }}
            >
              VER VIDEO
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    </Box>
  );
}
