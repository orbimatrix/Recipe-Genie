import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
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
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'green',
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
