import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Portal Berita API",
            version: "1.0.0",
            description: "API documentation for Portal Berita Winnicode",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development server",
            },
        ],
        components: {
          },
    },
    apis: [
        `${__dirname}/*.ts`,
    ], // Path to the route files
    
};

const swaggerSpec = swaggerJsDoc(options);

// This function sets up the Swagger UI on a given Express app
export const swagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

