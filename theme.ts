import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  breakpoints: {
    base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      '*': {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      'h1, h2, h3, h4, h5, h6': {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
      'p, span, div': {
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.700',
      },
      '@keyframes float': {
        '0%, 100%': {
          transform: 'translateY(0px)',
        },
        '50%': {
          transform: 'translateY(-10px)',
        },
      },
      '@keyframes fadeInUp': {
        '0%': {
          opacity: '0',
          transform: 'translateY(30px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      '@keyframes slideInLeft': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-30px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      '@keyframes slideInRight': {
        '0%': {
          opacity: '0',
          transform: 'translateX(30px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
    }),
  },
  colors: {
    brand: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },

  components: {
    Button: {
      baseStyle: (props: any) => ({
        fontWeight: 'semibold',
        borderRadius: 'md',
      }),
      variants: {
        solid: (props: any) => {
          const { colorScheme = 'green' } = props;
          return {
            bg: colorScheme === 'green' 
              ? (props.colorMode === 'dark' ? 'green.500' : 'green.500')
              : colorScheme === 'red'
              ? (props.colorMode === 'dark' ? 'red.500' : 'red.500')
              : (props.colorMode === 'dark' ? 'gray.600' : 'gray.600'),
            color: 'white',
            _hover: {
              bg: colorScheme === 'green'
                ? (props.colorMode === 'dark' ? 'green.600' : 'green.600')
                : colorScheme === 'red'
                ? (props.colorMode === 'dark' ? 'red.600' : 'red.600')
                : (props.colorMode === 'dark' ? 'gray.700' : 'gray.700'),
            },
            _active: {
              bg: colorScheme === 'green'
                ? (props.colorMode === 'dark' ? 'green.700' : 'green.700')
                : colorScheme === 'red'
                ? (props.colorMode === 'dark' ? 'red.700' : 'red.700')
                : (props.colorMode === 'dark' ? 'gray.800' : 'gray.800'),
            },
          };
        },
        outline: (props: any) => {
          const { colorScheme = 'green' } = props;
          return {
            borderColor: colorScheme === 'green' 
              ? (props.colorMode === 'dark' ? 'green.500' : 'green.500')
              : colorScheme === 'red'
              ? (props.colorMode === 'dark' ? 'red.500' : 'red.500')
              : (props.colorMode === 'dark' ? 'gray.500' : 'gray.500'),
            color: colorScheme === 'green'
              ? (props.colorMode === 'dark' ? 'green.400' : 'green.600')
              : colorScheme === 'red'
              ? (props.colorMode === 'dark' ? 'red.400' : 'red.600')
              : (props.colorMode === 'dark' ? 'gray.300' : 'gray.600'),
            _hover: {
              bg: colorScheme === 'green'
                ? (props.colorMode === 'dark' ? 'green.500' : 'green.50')
                : colorScheme === 'red'
                ? (props.colorMode === 'dark' ? 'red.500' : 'red.50')
                : (props.colorMode === 'dark' ? 'gray.600' : 'gray.50'),
              color: 'white',
            },
          };
        },
      },
    },
    IconButton: {
      baseStyle: (props: any) => ({
        borderRadius: 'md',
      }),
      variants: {
        ghost: (props: any) => ({
          color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.100',
            color: props.colorMode === 'dark' ? 'white' : 'gray.800',
          },
        }),
        solid: (props: any) => {
          const { colorScheme = 'green' } = props;
          return {
            bg: colorScheme === 'green' 
              ? (props.colorMode === 'dark' ? 'green.500' : 'green.500')
              : (props.colorMode === 'dark' ? 'gray.600' : 'gray.600'),
            color: 'white',
            _hover: {
              bg: colorScheme === 'green'
                ? (props.colorMode === 'dark' ? 'green.600' : 'green.600')
                : (props.colorMode === 'dark' ? 'gray.700' : 'gray.700'),
            },
          };
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          boxShadow: 'lg',
          borderRadius: 'xl',
        },
      },
    },
  },
});

export default theme;
