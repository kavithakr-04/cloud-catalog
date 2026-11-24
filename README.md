
# Enterprise Cloud Service Catalog

This project is a Node.js web application developed using the Express framework. It provides a Cloud Service Catalog interface and two JSON API endpoints to display cloud services and system health status.

## Port Configuration

During local development, the application uses port 8080 as the default port when no environment port is provided. The application uses `process.env.PORT || 8080` to configure this. In production, Vercel provides the deployment environment and manages the port for incoming requests. The application uses the available environment port instead of relying on a fixed local port. This makes the application suitable for both local execution and cloud deployment.
