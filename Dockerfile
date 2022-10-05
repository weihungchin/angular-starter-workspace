FROM node:alpine AS app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=app-build /app/dist/material-app /usr/share/nginx/html
EXPOSE 80