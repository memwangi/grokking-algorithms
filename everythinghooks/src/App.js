import "./App.css";
import { VStack, Button, HStack, Text } from "@chakra-ui/react";
import {useState} from 'react'

function App() {
	
  const [count, setCount] = useState(0)

	const onClick = () => {
		console.log("clicked", count + 1);
		setCount(count + 1)
	};

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
