import "./App.css";
import { VStack, Button, HStack, Text } from "@chakra-ui/react";

function App() {
	let count = 0;
	const onClick = () => {
		console.log("clicked", count);
		count = count + 1;
	};

	console.log("updated", count);
  
	return (
		<VStack width={"100vw"} height={"100vh"} justifyContent={"center"}>
			<HStack spacing={8}>
				<Button onClick={onClick} colorScheme={"blue"}>
					Add
				</Button>
				<Text fontSize={"md"} fontWeight="medium">
					{count} click
				</Text>
			</HStack>
		</VStack>
	);
}

export default App;
