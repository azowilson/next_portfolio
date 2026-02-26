# ============================================
# Stage 1: Install dependencies
# ============================================
FROM node:22.11.0-alpine AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# ============================================
# Stage 2: Build the Next.js application
# ============================================
FROM node:22.11.0-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
# Disable telemetry during the build if desired
# ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ============================================
# Stage 3: Run the Next.js application
# ============================================
FROM node:22.11.0-alpine AS runner
WORKDIR /app

# Set production environment variables
ENV NODE_ENV=production
# Next.js standalone output copies only necessary files,
# including a minimal server, into the .next/standalone directory.
# We copy everything from the builder's .next/standalone directory.
COPY --from=builder /app/.next/standalone ./

# Standalone does NOT include .next/static — copy it so CSS and client JS are served
COPY --from=builder /app/.next/static ./.next/static

# If you use the `public` directory, copy it over
# COPY --from=builder /app/public ./public

# Set the port the application will run on
ENV PORT=3000
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
