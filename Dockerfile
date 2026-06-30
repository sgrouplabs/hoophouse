# ============================================================================
# Hoophouse502 — Multi-stage Production Dockerfile
# ============================================================================
#
# Builds a production-optimized Next.js image in 3 stages:
#   1. deps    → Install node_modules (cached layer)
#   2. builder → Compile the Next.js production build
#   3. runner  → Slim runtime image with only what's needed to serve
#
# Usage:
#   docker build -t hoophouse502 .
#   docker run -p 3000:3000 hoophouse502
# ============================================================================

# --- Stage 1: Install dependencies -------------------------------------------
FROM node:22-alpine AS deps
WORKDIR /app

# Copy only package manifests for better layer caching
COPY package.json package-lock.json* ./

# Clean install (respects lockfile; fails if lockfile missing)
RUN npm ci

# --- Stage 2: Build the app -------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

# Copy installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all source files
COPY . .

# Disable Next.js telemetry during build (cleaner logs)
ENV NEXT_TELEMETRY_DISABLED=1

# Build the production bundle
RUN npm run build

# --- Stage 3: Production runtime --------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

# Run as non-root user for security (Alpine ships with node user)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only production dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy the compiled Next.js output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Set ownership to the non-root user
USER nextjs

# Environment variables for the Node server
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Expose the port Next.js listens on
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "run", "start"]