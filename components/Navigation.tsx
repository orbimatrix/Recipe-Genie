import React from 'react';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Icon,
  Text,
  Badge,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FaUtensils, FaBars, FaTimes, FaHome, FaInfoCircle, FaShieldAlt, FaGavel, FaSun, FaMoon } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'About', path: '/about', icon: FaInfoCircle },
    { name: 'Privacy', path: '/privacy', icon: FaShieldAlt },
    { name: 'Terms', path: '/terms', icon: FaGavel },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Box bg={bg} px={4} shadow="sm" borderBottom="1px" borderColor={borderColor}>
        <Flex h={16} alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto">
          {/* Logo */}
          <HStack spacing={4}>
            <Icon as={FaUtensils} w={8} h={8} color="green.500" />
            <Text
              fontSize="xl"
              fontWeight="bold"
              bgGradient="linear(to-r, green.400, blue.500)"
              bgClip="text"
            >
              Recipe Genie
            </Text>
          </HStack>

          {/* Desktop Navigation */}
          <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                as={RouterLink}
                to={item.path}
                px={3}
                py={2}
                rounded="md"
                textDecoration="none"
                fontWeight="medium"
                color={isActive(item.path) ? 'white' : useColorModeValue('gray.600', 'gray.300')}
                bg={isActive(item.path) ? 'green.500' : 'transparent'}
                _hover={{
                  color: 'white',
                  bg: 'green.500',
                }}
                transition="all 0.2s"
              >
                <HStack spacing={2}>
                  <Icon as={item.icon} />
                  <Text>{item.name}</Text>
                </HStack>
              </Link>
            ))}
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              color={useColorModeValue('gray.600', 'gray.300')}
              _hover={{ color: 'green.500' }}
            />
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="outline"
            aria-label="Open menu"
            icon={<FaBars />}
          />
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack spacing={3}>
              <Icon as={FaUtensils} w={6} h={6} color="green.500" />
              <Text
                fontSize="lg"
                fontWeight="bold"
                bgGradient="linear(to-r, green.400, blue.500)"
                bgClip="text"
              >
                Recipe Genie
              </Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  as={RouterLink}
                  to={item.path}
                  onClick={onClose}
                  px={4}
                  py={3}
                  rounded="md"
                  textDecoration="none"
                  fontWeight="medium"
                  color={isActive(item.path) ? 'white' : useColorModeValue('gray.600', 'gray.300')}
                  bg={isActive(item.path) ? 'green.500' : 'transparent'}
                  _hover={{
                    color: 'white',
                    bg: 'green.500',
                  }}
                  transition="all 0.2s"
                >
                  <HStack spacing={3}>
                    <Icon as={item.icon} />
                    <Text>{item.name}</Text>
                  </HStack>
                </Link>
              ))}
              <Button
                onClick={toggleColorMode}
                variant="ghost"
                leftIcon={<Icon as={colorMode === 'light' ? FaMoon : FaSun} />}
                justifyContent="flex-start"
                px={4}
                py={3}
                color={useColorModeValue('gray.600', 'gray.300')}
                _hover={{ color: 'green.500', bg: useColorModeValue('green.50', 'green.500') }}
              >
                {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navigation;
