#!/bin/sh

# NGINX config
nginx -s reload

# Run NGINX
nginx

# Build Astro
API_URL="$BACKEND_URL" bun run build

# Run Astro
API_URL="$BACKEND_URL" bun start