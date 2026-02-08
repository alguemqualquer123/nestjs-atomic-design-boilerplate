export const ERRORS = {
  // Authentication Errors
  UNAUTHORIZED: 'Unauthorized access',
  INVALID_TOKEN: 'Invalid or expired token',
  FORBIDDEN: 'Forbidden resource',

  // Validation Errors
  VALIDATION_FAILED: 'Validation failed',
  INVALID_INPUT: 'Invalid input data',
  REQUIRED_FIELD: 'This field is required',

  // Resource Errors
  NOT_FOUND: 'Resource not found',
  ALREADY_EXISTS: 'Resource already exists',
  CONFLICT: 'Resource conflict',

  // Server Errors
  INTERNAL_ERROR: 'Internal server error',
  DATABASE_ERROR: 'Database operation failed',
  EXTERNAL_SERVICE_ERROR: 'External service error',

  // Business Logic Errors
  INSUFFICIENT_PERMISSIONS: 'Insufficient permissions',
  INVALID_OPERATION: 'Invalid operation',
  RESOURCE_LOCKED: 'Resource is locked',

  // Rate Limiting
  RATE_LIMIT_EXCEEDED: 'Rate limit exceeded',
  TOO_MANY_REQUESTS: 'Too many requests',
};

export const ERROR_CODES = {
  // HTTP Status Codes mapped to business logic
  AUTHENTICATION_FAILED: 401,
  AUTHORIZATION_FAILED: 403,
  VALIDATION_ERROR: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  RATE_LIMIT: 429,
} as const;
