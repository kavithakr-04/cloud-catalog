
const express = require('express');
const app = express();

// Set the port
const PORT = process.env.PORT || 8080;

// Serve the public folder
app.use(express.static('public'));

// API 1: Cloud Services
app.get('/api/services', (req, res) => {
    const services = [
        {
            serviceId: 1,
            serviceName: "Amazon EC2",
            category: "IaaS",
            pricingModel: "Pay-as-you-go"
        },
        {
            serviceId: 2,
            serviceName: "AWS Lambda",
            category: "PaaS",
            pricingModel: "Pay-per-request"
        },
        {
            serviceId: 3,
            serviceName: "Amazon S3",
            category: "IaaS",
            pricingModel: "Pay-per-storage"
        },
        {
            serviceId: 4,
            serviceName: "Google Workspace",
            category: "SaaS",
            pricingModel: "Subscription-based"
        }
    ];

    res.json(services);
});

// API 2: System Status
app.get('/api/status', (req, res) => {
    res.json({
        status: "Operational",
        developer: "Kavitha K R",
        environment: "Cloud PaaS"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
