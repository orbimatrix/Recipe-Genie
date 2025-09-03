import React from 'react';
import {
  Box,
  Card,
  CardBody,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';

interface ErrorDisplayProps {
  error: string | null;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  if (!error) return null;

  return (
    <Box position="fixed" top="4" right="4" zIndex={1001}>
      <Card bg="red.50" borderColor="red.200" maxW="400px">
        <CardBody>
          <VStack spacing={3}>
            <Text fontWeight="bold" color="red.700">
              An Error Occurred
            </Text>
            <Text color="red.600" fontSize="sm">{error}</Text>
            {error.includes("Failed to generate recipes") && onRetry && (
              <Button
                onClick={onRetry}
                colorScheme="red"
                size="sm"
              >
                Retry
              </Button>
            )}
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ErrorDisplay;
