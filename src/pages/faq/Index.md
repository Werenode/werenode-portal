# Frequently Asked Questions (FAQ)

Welcome to the Werenode FAQ page! Here, we answer some of the most common questions about the Werenode platform, electric vehicle charging, and blockchain technology integration.

## General Questions

### 1. What is Werenode?
Werenode is a decentralized electric vehicle charging ecosystem that uses blockchain technology to make charging sessions secure, transparent, and efficient. It connects EV drivers, charging station operators, and service providers through a combination of mobile applications, a web portal, and blockchain-based smart contracts.

### 2. How does Werenode benefit electric vehicle drivers?
Werenode offers EV drivers a seamless way to locate available charging stations, initiate charging sessions, and securely pay using blockchain technology. The platform provides transparency and a consistent user experience across multiple charging networks.

### 3. How do I share my charging equipment ?

- Check that it is in the list of validated equipment:
  - any OCPP 1.6 device
  - a Shelly connected WiFi plug
  - a Netatmo compatible WiFi plug
  - a eWeLink compatible WiFi plug

Then complete the registration form below and send a email to support@werenode.com for further details
> https://forms.gle/GtezftCRLUKy5n2E7

### 4. How do I unregister after I created an account ?
You should first empty your wallets (for example, convert all you belongings to WRC and send it to an external address). Then send an email to support@werenode.com <u>from the email account</u> you used for registration within the application. The subject should be 'Delete my account'. Please allow 2-3 days for execution.

### 5. What is the difference between the mobile app, web portal, and Member App?
- **Mobile App**: Built with React Native, it allows EV drivers to locate, initiate, and manage charging sessions from their smartphones.
- **Web Portal**: Built with Docusaurus, it provides resources for developers, charging station owners, and users to manage EVSE units and find relevant documentation.
- **Member App**: Built with Angular, it provides information about charging sessions, such as consumption details and user insights, for registered Werenode members.

## Technical Questions

### 5. How does the blockchain integration work?
The Werenode platform uses blockchain technology to manage payments and transactions for charging sessions. Smart contracts implemented in Solidity manage payments and energy credits, providing a secure and tamper-proof record of all activities.

### 6. What is the EVSE Manager?
The **EVSE Manager** is a charging session API that automates all blockchain transactions, simplifying the process for users. It interacts with smart contracts to initiate payments, manage sessions, and ensure secure interactions with the charging stations.

### 7. What is the OCPP layer used for?
The **OCPP Layer**, developed in C#, is used to facilitate communication between the charging stations and the backend server. This ensures a consistent and efficient connection between the Werenode system and the EVSE units.

### 8. Can I use my MetaMask wallet with Werenode?
Yes, Werenode provides an alternative decentralized web application called **DEFev**, which is fully compatible with MetaMask. This allows users to directly manage their transactions with a blockchain wallet, ensuring all interactions are decentralized.

### 9. What protocols does Werenode use to ensure interoperability?
Werenode uses multiple protocols to ensure interoperability across different charging stations and networks:
- **OCPP (Open Charge Point Protocol)** for communication between charging stations and backend systems.
- **OCPI (Open Charge Point Interface)** for integration between different charging networks.
- **MQTT** for managing IoT-connected plugs, especially for slow charging devices.

## Usage and Troubleshooting

### 10. How do I start a charging session?
You can start a charging session using the Werenode mobile app:
1. **Locate a Charging Station**: Use the map to find a nearby charging station.
2. **Start Charging**: Tap on the charging station and select "Start Session."
3. **Payment**: Confirm the payment through your integrated blockchain wallet.

Alternatively, you can use the **Member App** or **DEFev** for web-based charging management.

### 11. I’m having trouble locating a charging station on the map. What should I do?
Ensure that your app has permission to access your location. If the problem persists, try refreshing the map or check your internet connection. You can also visit the **werenode-portal** for more information about charging stations.

### 12. How can I view my past charging sessions?
You can view your past charging sessions in the **Member App** or on the **mobile app** by navigating to your profile and selecting "Charging History." This will show you all relevant session data, including consumption, duration, and cost.

## Security and Privacy

### 13. How secure is Werenode?
Werenode leverages blockchain technology to ensure secure transactions. All payments are managed through smart contracts, and user authentication is handled using industry-standard protocols. Decentralized identity options are also being explored to further enhance privacy and security.

### 14. How does Werenode handle my data?
Werenode collects only the necessary data needed to manage charging sessions effectively. User data is stored securely and is never shared with third parties without consent. Blockchain transactions ensure that financial information remains tamper-proof.

## Future Developments

### 15. What are the future plans for Werenode?
Werenode is planning to implement advanced data analytics to provide users with predictive charging suggestions, explore cross-chain payment options to support multiple blockchain networks, and integrate **Decentralized Identity (DID)** for improved user authentication.

### 16. How can I contribute to the Werenode platform?
Werenode is an open ecosystem, and contributions from the community are welcome! You can explore our developer documentation on the **werenode-portal** and contribute by suggesting features, reporting issues, or even developing additional integrations.

---

If you have any other questions not covered here, feel free to reach out to our support team or consult our detailed documentation available on the werenode-portal.

