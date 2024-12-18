---
sidebar_position: 9
---

# Innovation Project - DID-IMP

Werenode is committed to advancing Web3.0, electric vehicle (EV) charging technologies, and decentralized energy solutions by developing innovative components that leverage blockchain, IoT, decentralized identity, and cutting-edge user interfaces. This document highlights one of our key innovation projects: **DID-IMP** (standing initially for "Decentralized public key Infrastructure for Defended IoT data Management and Procurement" but better suited for "Decentralized Identity for Interoperable Mobility Platform" with its integration into Werenode technical architecture). We have also developed several other Web3.0 systems: **DEFev**, **IOTPAY**, **DECO** developed in collaboration with **OP Mobility** and **SII**, the **Alexa Speech HMI version** of Werenode, developed in collaboration with Renault's **ElectroShaker Lab**, and the **LG Web OS** version of our application, developed in collaboration with **LG Nova**.

## DID-IMP - Decentralized Identity for Interoperable Mobility Platform

<a href="https://did-imp.werenode.io/" target="_blank" rel="noopener noreferrer">
    <img src="/img/DID-IMP_NGI.png"></img>
</a>

The DID-IMP project is building a decentralized public key infrastructure to allow any connected object to be able to deliver or procure secured and traceable data. To achieve this, Werenode is leveraging blockchain technologies to remove the need for a classical hierarchical structure with players like the Certificate Authority (CA) and the Registration Authority (RA). For DID-IMP, we replace these administrator-like trusted third parties (RA & CA) with a feeless blockchain smart contract. The blockchain is also used as a Certificate Store on which services providers can issue and manage revocable certificates and credentials. Such a lean architecture is especially well adapted for Internet of Things (IoT) Secure Automatic Data Sharing SADS. Indeed, 
SADS can be used in various ways to simplify and streamline data sharing processes, and to secure and trace data transfers. Some of the main use cases include:
- Connected Cars: DID-IMP-enabled cars can automatically share data for tolls, 
parking, vehicle recharging (electricity or hydrogen), and other transportation related processes, making the service more convenient for drivers. They can 
automatically deliver maintenance data with selected relevant bodies.
- Remote healthcare: SADS systems can enable remote healthcare services, such as telemedicine and patient monitoring, improving access to healthcare. 
Sensors can also collect data on patient health and behaviour and control the delivery of this data with specific accredited personas.
- Cognitive Cities: IoT plays an important role in creating smarter, environment conscious and more efficient cities. Applications like smart traffic 
management, water and waste management, and public safety rely on secure data transfer to optimize operations and protect citizens' data.
- Energy Management: IoT devices in the energy sector, such as smart meters and grid sensors, transmit data about energy consumption and distribution. 
Secure data transfer helps utilities ensure data accuracy and protect against unauthorized access. It's also a key component to be able to build local and 
decentralized energy communities.
- And also, Smart Homes, Maintenance, Logistics...

In a nutshell, we build a secure automatic data sharing solution, bringing better traceability to data, securing their flow and allowing companies to reduce administrative overhead, save time and money, and offer a better protected data sharing experience for final customers. Indeed, users can retain ownership and control over their IoT data while granting access to specific parties through permissioned credentials. Additionally, our SADS-enabled solution can help to manage the flow of sensitive data and the compliance to the new European and Global regulations, thanks to the native traceability features provided by blockchain technologies combined with the process proposed by this DID-IMP project, which implies a traced blockchain transaction for each data transfer, also tracking the main regulatory characteristics of the data exchanged.

### Key Features

- **Decentralized Identity (DID)**: DID-IMP leverages **Decentralized Identity** to allow users to authenticate across different platforms without relying on centralized authorities. This ensures data privacy and control over user credentials.
- **Interoperability**: The platform enables users to authenticate and use multiple services seamlessly, thanks to a decentralized and open identity protocol. This interoperability is a key step towards achieving a unified and user-friendly automatic data sharing experience across different networks and service providers.
- **Privacy-Preserving**: DID-IMP ensures that users’ personal information is not stored on centralized servers, reducing the risk of data breaches. The decentralized architecture ensures that only the necessary information is shared in a secure manner.

### Collaboration

**DID-IMP** was developed within the **NGI Trustchain** framework. **DID-IMP** as Werenode's **Decentralized Identity** project aimed at creating a secure and private way for users to authenticate and interact with the Werenode ecosystem. DID-IMP was developed thanks to NGI Trustchain EU funded project (Grant Agreement Number 101093274).

<a href="https://trustchain.ngi.eu/" target="_blank" rel="noopener">
    <img src="/img/trustchain.png"></img>
</a>

### User Centric Approach

DID-IMP was developed thanks to a user-centric development methodology. Thanks to interviews with the beta test companies, during all the development process, we identified the following key users' needs:

- Access to real-time data. Clients require the ability to access data generated by IoT devices in real time. Real-time data access is crucial for making timely and informed decisions based on the latest information from connected devices.

- Ensure data integrity generated by sensors and devices. Users need assurance that the data collected from sensors and devices is accurate and has not been corrupted during transmission. Data integrity measures are essential to maintain the reliability and trustworthiness of information collected from IoT sources.

- Make data tamper-resistant. Clients require a tamper-resistant system to ensure that once data is recorded, it cannot be altered or manipulated without detection. Blockchain, with its decentralized and immutable nature, provides a secure mechanism for ensuring the integrity of IoT data.

- Access control and permissions, allowing for fine-grained control over who can access and modify IoT data. Users need robust access control mechanisms to regulate who can access and modify IoT data. Fine-grained permissions allow for control over different aspects of data access, ensuring that only authorized individuals or devices can interact with specific data.

- Identification of devices in systems. Clients seek a reliable method for identifying and authenticating IoT devices within the system. Secure device identification ensures that data is attributed accurately to its source and helps prevent unauthorized devices from participating in the network.

- Scalability, throughput and interoperability of system. Users require a scalable system capable of handling a growing number 
of IoT devices. High throughput is necessary to efficiently process and validate transactions on the blockchain. Interoperability ensures seamless communication between diverse IoT devices and platforms.

- Accessibility for the end consumer. Users expect an interface that is user-friendly and easily accessible to end consumers. Accessibility ensures that non-technical users can interact with and benefit from the data generated by IoT devices.

- Ease of setup and usage. Clients desire a system that is easy to set up and use, minimizing the complexity of integrating IoT devices with the blockchain network. Streamlined setup processes contribute to quicker adoption and implementation of the solution.

Addressing these user needs allowed us to create a secure, efficient, and user friendly system that leverages blockchain technology to ensure data integrity, tamper resistance, and controlled access in the context of IoT device communication

