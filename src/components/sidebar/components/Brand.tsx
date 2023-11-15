// Chakra imports
import { Flex, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';
import { useApp } from 'contexts/AuthUserProvider';
// Assets
// import Brand from 'img/logo.png';
export function SidebarBrand() {
	//   Chakra color mode
	const { name, logo } = useApp();
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' justifyItems='center' flexDirection='column'>
			<HStack py='25px' spacing='1px'>
				{/* <Image alt="" src={logo.src} w={'30px'} h={'30px'} /> */}
				<Text fontSize='2xl' fontWeight='bold' color={logoColor} >
					{name}
				</Text>
			</HStack>
			{/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
