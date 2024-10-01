---
sidebar_position: 2
---

# Architecture

Werenode System Architecture
Overview
Werenode is a decentralized electric vehicle charging ecosystem that leverages blockchain technology to provide a transparent, secure, and scalable solution for EV users and charging station operators. The Werenode platform includes mobile applications, a cloud-based backend, a blockchain network for transactions, and an open-source web portal for managing Electric Vehicle Supply Equipment (EVSE).

System Components
The Werenode system architecture consists of several key components:

Mobile App (React Native)
Web Portal (Docusaurus-based werenode-portal)
Member App (Angular)
Backend Services
Blockchain Network
OCPP Layer (C#)
OCPI Layer
MQTT Layer
EVSE Manager
Alternative DEFev Application
EVSE Map Integration
1. Mobile App (React Native)
The Werenode mobile application is built using React Native to provide a cross-platform experience for both Android and iOS users. The app allows electric vehicle (EV) drivers to locate available charging stations, initiate and manage charging sessions, and perform payments via blockchain transactions.

Key features:

EVSE Discovery: The app provides a map interface for users to locate nearby charging stations.
Wallet Integration: Built-in support for blockchain wallets to perform payments securely.
Session Management: Users can monitor their charging sessions in real-time.
2. Web Portal (Docusaurus-based werenode-portal)
The werenode-portal is a web interface for managing EVSE and providing documentation for developers and users. It is built with Docusaurus to ensure easy navigation, maintainability, and scalability.

Key features:

Documentation Hub: Includes comprehensive guides for developers, charging station owners, and users.
EVSE Management: Charging station operators can register, update, and monitor their EVSE units.
EVSE Map Integration: The EVSE map from the React Native mobile app has been integrated into the portal to offer a unified experience for viewing available charging stations.
3. Member App (Angular)
The Member App is built using Angular and provides detailed information about charging sessions for Werenode members. It offers a convenient way for users to manage their charging activities and gain insights into their energy usage.

Key features:

Charging Session Overview: Displays information about ongoing and past charging sessions, including energy consumed, duration, and cost.
User Insights: Offers analytics and insights on charging behavior, helping users optimize their charging patterns.
Account Management: Allows users to manage their profiles, view transaction history, and access relevant documents.
4. Backend Services
The backend services provide the necessary infrastructure to manage user data, charging station information, and other core business logic. It consists of a RESTful API and microservices architecture, deployed using cloud-based infrastructure.

Key components:

User Authentication: Manages user accounts and handles authentication via OAuth2 and other secure protocols.
EVSE Data Management: Stores information about the charging stations, their status, and availability.
Charging Session API: Handles requests from the mobile app to start, stop, and monitor charging sessions.
5. Blockchain Network
The Werenode platform utilizes blockchain technology to enable decentralized and transparent transactions for charging sessions.

Key elements:

Smart Contracts: Implemented in Solidity, these contracts manage payments, user interactions, and energy credit balances.
Token Payments: Payments for charging sessions are managed through a blockchain-based token system, ensuring secure, fast, and low-cost transactions.
Data Transparency: Transaction data is recorded on-chain, providing verifiable and tamper-proof records.
6. OCPP Layer (C#)
The Open Charge Point Protocol (OCPP) layer, developed in C#, provides a communication standard between the charging stations (EVSE) and the backend server. This layer ensures interoperability across various EVSE devices, enabling efficient communication and management of the charging infrastructure.

Key features:

Device Communication: Facilitates reliable bidirectional communication with the charging stations.
Remote Management: Allows the remote configuration, monitoring, and control of charging points.
Scalability: Supports large-scale integration of different manufacturers' charging stations.
7. OCPI Layer
The Open Charge Point Interface (OCPI) layer enables seamless integration and roaming between different charging networks. This allows EV drivers to access and pay for charging services across different operators while maintaining a consistent experience.

Key features:

Interoperability: Provides a standard interface for communication between service providers.
Billing and Settlements: Facilitates cross-operator billing, ensuring a smooth payment experience for users.
Real-Time Data Sharing: Shares real-time charging station availability and pricing across networks.
8. MQTT Layer
The MQTT Layer is used to handle IoT-connected plugs, particularly for slow-charge devices. MQTT (Message Queuing Telemetry Transport) is a lightweight protocol ideal for machine-to-machine (M2M) communication in IoT.

Key features:

IoT Connectivity: Provides connectivity for slow-charge plugs and other IoT devices in the ecosystem.
Low Bandwidth: Operates efficiently with minimal data usage, suitable for intermittent or low-power networks.
Real-Time Monitoring: Allows real-time data transmission from slow chargers, which can be displayed in the mobile app or web portal.
9. EVSE Manager
The EVSE Manager is the charging session API responsible for orchestrating and automating all blockchain transactions. It serves as a core logic engine that integrates the user’s interactions with both the blockchain network and the EVSE hardware.

Key features:

Charging Session Automation: Manages the complete lifecycle of a charging session, from initiation to completion.
Blockchain Integration: Automatically handles the creation and execution of blockchain transactions, reducing the complexity for end-users.
User and Operator Interaction: Acts as a bridge between the user app, the backend, and charging infrastructure, streamlining the overall process.
10. Alternative DEFev Application
DEFev is a fully decentralized web application that uses blockchain technology for EV charging and transaction management. It is built to provide a purely decentralized experience, leveraging blockchain wallets like MetaMask.

Key features:

MetaMask Integration: Users can interact directly with the blockchain through MetaMask, ensuring all transactions are decentralized and transparent.
Web3 Interface: DEFev is implemented using Web3.js to provide direct connectivity to the Ethereum network, enabling full peer-to-peer interactions without intermediary servers.
Decentralized Control: Charging session initiation and payments are handled entirely through smart contracts, offering the ultimate in user autonomy and security.
11. EVSE Map Integration
To create a unified and seamless experience for users, the EVSE map from the mobile app has also been integrated into the Docusaurus-based werenode-portal. This integration ensures that the web portal can serve as a point of interaction for users looking to locate and learn more about charging stations without needing the mobile app.

Key features:

Interactive Map: Displays all available charging stations, their status, and relevant details.
Filter and Search: Users can filter stations by various criteria such as availability, pricing, and charging speed.
Consistent Experience: Integration with the same backend services as the mobile app ensures a consistent data experience across platforms.
Technology Stack
Frontend:
Mobile: React Native
Web Portal: Docusaurus, React
Member App: Angular
DEFev: React, Web3.js, MetaMask
Backend: Node.js, Express.js, MongoDB, Docker (for microservices)
Blockchain: Solidity (smart contracts), Ethereum-compatible network
Protocols:
OCPP (C#) for charging station communication
OCPI for network interoperability
MQTT for IoT-connected slow charge plugs
Hosting & Deployment: AWS (EC2, S3), Kubernetes for microservices orchestration
APIs: REST API for mobile and web integration, GraphQL for optimized data queries
Data Flow
User Interaction: A user interacts with the mobile app, the werenode-portal, the Member App, or the DEFev web application to find a charging station or manage a session.
API Request: The interaction triggers an API request to the backend to retrieve EVSE data or execute a charging action.
EVSE Manager: The EVSE Manager automates blockchain transactions, interacting with the smart contracts to handle payment.
Blockchain Transaction: If payment is required, the user interacts with the integrated wallet (MetaMask or other supported wallets) to execute a blockchain transaction.
EVSE Control: The backend communicates via the OCPP layer or MQTT layer to start or stop the charging process.
Data Update: Charging session data is updated in the database and, where relevant, logged on the blockchain.
Future Roadmap
Advanced Data Analytics: Adding predictive analytics to suggest optimal charging times based on user behavior and network demand.
Decentralized Identity: Implementing DID (Decentralized Identity) for user authentication to enhance privacy and security.
Cross-chain Interoperability: Exploring cross-chain payment options to support multiple blockchain networks.
