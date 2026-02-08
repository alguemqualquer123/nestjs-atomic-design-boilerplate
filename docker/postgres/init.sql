-- Initialize PostgreSQL database
-- This script runs when the container starts for the first time

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Set timezone
SET timezone = 'UTC';

-- Log initialization
\echo 'PostgreSQL initialized successfully';