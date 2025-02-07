import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Badge,
  IconButton,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import {
  FaShoppingCart,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars
} from 'react-icons/fa';
import portada from './assets/portada.jpeg';
import premium1 from './assets/premium1.jpeg';
import premium2 from './assets/premium2.jpeg';
import premium3 from './assets/premium3.jpeg';
import galeria1 from './assets/galeria1.jpeg';
import galeria2 from './assets/galeria2.jpeg';
import galeria3 from './assets/galeria3.jpeg';
import galeria4 from './assets/galeria4.jpeg';
import galeria5 from './assets/galeria5.jpeg';
import galeria6 from './assets/galeria6.jpeg';
import dormitorio from './assets/dormitorio.jpg';
import WhatsAppButton from './Components/WhatsappButton';

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const menuItems = ['Inicio', 'Productos', 'Cobijas Térmicas', 'Nosotros', 'Contacto'];

  return (
    <>
      <Flex display={{ base: 'none', md: 'flex' }} gap={8}>
        {menuItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            fontSize="md"
            fontWeight="medium"
            color="gray.600"
            _hover={{ color: 'purple.500' }}
          >
            {item}
          </Link>
        ))}
      </Flex>

      <IconButton
        display={{ base: 'flex', md: 'none' }}
        aria-label="Open menu"
        icon={<FaBars />}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  fontSize="md"
                  fontWeight="medium"
                  onClick={onClose}
                >
                  {item}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Header = () => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg={bgColor}
      boxShadow="sm"
      zIndex={1000}
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg" color="purple.500">
            Adriluxe
          </Heading>
          <Navigation />
        </Flex>
      </Container>
    </Box>
  );
};

const Hero = () => {
  return (
    <Box
      id="inicio"
      pt="80px"
      pb={12}
      bg={useColorModeValue('purple.50', 'gray.800')}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <VStack align="stretch" spacing={6} maxW={{ base: 'full', md: '50%' }}>
            <Heading size="2xl" lineHeight="shorter">
              Descubre el Confort Premium
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Especialistas en cobijas térmicas ecuatorianas de la más alta calidad
            </Text>
            <Button
              size="lg"
              colorScheme="purple"
              leftIcon={<FaShoppingCart />}
            >
              Ver Catálogo
            </Button>
          </VStack>
          <Box maxW={{ base: 'full', md: '50%' }}>
            <Image
              src={portada}
              alt="Cobija térmica premium"
              borderRadius="lg"
              shadow="xl"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Cobija Térmica Deluxe",
      description: "Máximo confort y calidez para las noches más frías",
      price: "$59.99",
      rating: 5,
      image: premium1
    },
    {
      id: 2,
      name: "Cobija Premium Plus",
      description: "Diseño elegante con tecnología térmica avanzada",
      price: "$79.99",
      rating: 4,
      image: premium2
    },
    {
      id: 3,
      name: "Cobija Signature",
      description: "Nuestra línea más exclusiva de cobijas térmicas",
      price: "$99.99",
      rating: 5,
      image: premium3
    }
  ];

  return (
    <Box id="productos" py={12}>
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={8}>
          Nuestros Productos Destacados
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {products.map((product) => (
            <Card key={product.id}>
              <CardBody>
                <Image
                  src={product.image}
                  alt={product.name}
                  borderRadius="lg"
                  mb={4}
                />
                <Stack spacing={3}>
                  <Heading size="md">{product.name}</Heading>
                  <Text>{product.description}</Text>
                  <Flex justify="space-between" align="center">
                    <Text color="purple.600" fontSize="2xl" fontWeight="bold">
                      {product.price}
                    </Text>
                    <Flex>
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <FaStar key={i} color="#FFB400" />
                      ))}
                    </Flex>
                  </Flex>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  w="full"
                  colorScheme="purple"
                  leftIcon={<FaShoppingCart />}
                >
                  Añadir al Carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const BlanketGallery = () => {
  const images = [
    { id: 1, src: galeria1, alt: 'Cobija térmica 1' },
    { id: 2, src: galeria2, alt: 'Cobija térmica 2' },
    { id: 3, src: galeria3, alt: 'Cobija térmica 3' },
    { id: 4, src: galeria4, alt: 'Cobija térmica 4' },
    { id: 5, src: galeria5, alt: 'Cobija térmica 5' },
    { id: 6, src: galeria6, alt: 'Cobija térmica 6' }
  ]

  return (
    <Box id="cobijas" py={12} bg={useColorModeValue('gray.50', 'gray.700')}>
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={8}>
          Galería de Cobijas Térmicas
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {images.map((image) => (
            <Box
              key={image.id}
              borderRadius="lg"
              overflow="hidden"
              shadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                w="full"
                h="auto"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const About = () => {
  return (
    <Box id="nosotros" py={12}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={12}
        >
          <Box flex="1">
            <Image
              src={dormitorio}
              alt="Sobre Nosotros"
              borderRadius="lg"
              shadow="xl"
            />
          </Box>
          <VStack flex="1" align="stretch" spacing={6}>
            <Heading>Sobre Adriluxe</Heading>
            <Text color="gray.600">
              En Adriluxe, nos enorgullecemos de ofrecer las mejores cobijas térmicas ecuatorianas,
              combinando la artesanía tradicional con tecnología moderna para brindarte el máximo confort.
            </Text>
            <Text color="gray.600">
              Cada producto es cuidadosamente seleccionado y sometido a rigurosos controles de calidad
              para garantizar tu satisfacción total.
            </Text>
            <Button
              variant="outline"
              colorScheme="purple"
              size="lg"
            >
              Conoce Nuestra Historia
            </Button>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

const Contact = () => {
  return (
    <Box id="contacto" py={12} bg={useColorModeValue('gray.50', 'gray.700')}>
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={8}>
          Contacto
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Card>
            <CardBody>
              <VStack spacing={4}>
                <FaPhone size={24} color="purple" />
                <Heading size="md">Teléfono</Heading>
                <Text>+593 99 999 9999</Text>
              </VStack>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <VStack spacing={4}>
                <FaEnvelope size={24} color="purple" />
                <Heading size="md">Email</Heading>
                <Text>info@adriluxe.com</Text>
              </VStack>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <VStack spacing={4}>
                <FaMapMarkerAlt size={24} color="purple" />
                <Heading size="md">Dirección</Heading>
                <Text>Av. Principal 123, Quito, Ecuador</Text>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const Footer = () => {
  const bgColor = useColorModeValue('gray.800', 'gray.900');

  return (
    <Box as="footer" bg={bgColor} color="white" py={8}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <VStack align="stretch" spacing={4}>
            <Heading size="md">Adriluxe</Heading>
            <Text color="gray.300">
              Tu destino para productos de calidad premium
            </Text>
          </VStack>

          <VStack align="stretch" spacing={4}>
            <Heading size="md">Enlaces Rápidos</Heading>
            <VStack align="stretch" spacing={2}>
              {['Inicio', 'Productos', 'Cobijas Térmicas', 'Nosotros'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  color="gray.300"
                  _hover={{ color: 'white' }}
                >
                  {item}
                </Link>
              ))}
            </VStack>
          </VStack>

          <VStack align="stretch" spacing={4}>
            <Heading size="md">Contacto</Heading>
            <VStack align="stretch" spacing={2}>
              <Flex align="center" gap={2}>
                <FaPhone />
                <Text>+593 99 999 9999</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <FaEnvelope />
                <Text>info@adriluxe.com</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <FaMapMarkerAlt />
                <Text>Quito, Ecuador</Text>
              </Flex>
            </VStack>
          </VStack>

          <VStack align="stretch" spacing={4}>
            <Heading size="md">Síguenos</Heading>
            <Flex gap={4}>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                colorScheme="whiteAlpha"
                variant="ghost"
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                colorScheme="whiteAlpha"
                variant="ghost"
              />
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                colorScheme="whiteAlpha"
                variant="ghost"
              />
            </Flex>
          </VStack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderTopColor="gray.700" mt={8} pt={8}>
          <Text textAlign="center" color="gray.300">
            © {new Date().getFullYear()} Adriluxe. Todos los derechos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

const App = () => {
  return (
    <Box minH="100vh">
      <Header />
      <Box as="main">
      <WhatsAppButton />
        <Hero />
        <ProductShowcase />
        <BlanketGallery />
        <About />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;