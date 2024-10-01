---
sidebar_position: 4
---

# Register My EVSE - User Manual

Welcome to the **Register My EVSE** page! This guide will walk you through the step-by-step process of registering your Electric Vehicle Supply Equipment (EVSE) with Werenode. Registering your EVSE allows you to make it available for public or private use within the Werenode charging network.

## Introduction

The **Register My EVSE** page is designed to help charging station owners quickly and easily add their charging units to the Werenode platform. Once registered, your EVSE will be visible on our mobile app and web portal, allowing drivers to locate, use, and pay for charging sessions through blockchain-based transactions.

## Prerequisites

Before you begin, make sure you have:

1. **An Account on Werenode**: You need an active Werenode account to register your EVSE.
2. **EVSE Information**: You should have details about your charging station, including:
   - **Location (address or GPS coordinates)**
   - **EVSE Type**: Fast or slow charger
   - **Connector Type**: Type 1, Type 2, CHAdeMO, CCS, etc.
   - **OCPP Compatibility**: Ensure your EVSE supports the Open Charge Point Protocol (OCPP).
3. **Internet Access**: A stable internet connection to complete the registration.

## How to Register Your EVSE

Follow these steps to register your EVSE on the Werenode platform:

### Step 1: Log In

1. Go to the Werenode web portal and click on the **Login** button in the top-right corner.
2. Enter your credentials (email and password) and click **Sign In**.
3. If you don’t have an account yet, click **Sign Up** to create one.

### Step 2: Access the "Register My EVSE" Page

1. After logging in, navigate to the **Dashboard**.
2. From the Dashboard menu, select **Register My EVSE**. This will take you to the registration form.

### Step 3: Enter EVSE Details

You will be prompted to fill in several details about your charging station. Here’s what you need to provide:

- **EVSE Name**: Enter a unique name for your charging station (e.g., "Downtown Fast Charger").
- **Location**:
  - **Address**: Enter the address where the EVSE is located.
  - **GPS Coordinates**: Alternatively, you can enter the latitude and longitude for more precision.
- **Connector Type**: Choose the type of connector(s) available at the EVSE (e.g., Type 1, Type 2, CHAdeMO, CCS).
- **Charging Speed**: Select whether this is a **Slow Charge** or **Fast Charge** device.
- **Availability**: Specify the hours of operation (e.g., 24/7, specific hours).
- **Pricing Information**: Provide the cost for charging (e.g., per kWh or per session). You can enter a fixed price or a rate based on energy consumed.
- **Authentication Method**:
  - **Blockchain Payment**: Select if payments will be made using blockchain-based tokens.
  - **RFID**: If your EVSE uses RFID for access, enter details here.

### Step 4: OCPP Configuration

If your EVSE is **OCPP-compliant**, you will need to enter additional configuration details:

- **OCPP Version**: Select the OCPP version supported by your EVSE (e.g., OCPP 1.6, OCPP 2.0).
- **Central System URL**: Enter the URL of the central system that will manage the EVSE communication.

### Step 5: Add Optional Features

You can also add some optional features:

- **Photographs**: Upload pictures of your charging station to help drivers easily locate it.
- **Access Restrictions**: Indicate if the station is **Public** or **Private**. If private, specify who can access it.
- **Contact Information**: Enter contact information for users to get in touch in case of issues.

### Step 6: Confirm Registration

Once all the required fields are filled:

1. **Review the Information**: Double-check all the details to ensure accuracy.
2. **Click "Register"**: Press the **Register** button at the bottom of the page.

### Step 7: Verification

After clicking register:

1. Your registration will be reviewed by the Werenode team.
2. You will receive an email confirming that your EVSE has been successfully added to the network, typically within 24-48 hours.

### Step 8: Managing Your EVSE

Once registered, you can manage your EVSE from the **Dashboard**:

- **Edit EVSE Details**: If you need to change information, go to the **My EVSE** section and click on the **Edit** button next to your EVSE.
- **View Statistics**: Monitor charging sessions, energy usage, and revenue generated.
- **Deactivate EVSE**: Temporarily remove your EVSE from the network if needed.

## Tips for Successful Registration

- **Ensure Accurate Location Information**: Correct GPS coordinates or address are crucial for helping users find your charging station.
- **Upload Quality Images**: Images help drivers quickly identify your EVSE and understand its surroundings.
- **Check OCPP Compatibility**: OCPP details must match your EVSE's capabilities to ensure proper communication.
- **Identifier Format**: It is maximum 6 Base58 characters long. A Base58 character is one of :
  
```
1 2 3 4 5 6 7 8 9
A B C D E F G H   J K L M N   P Q R S T U V W X Y Z
a b c d e f g h i j k   m n o p q r s t u v w x y z
```
- **Number of EVSES**: Each EVSE gets the same settings (except the identifier). Settings specific to an EVSE may be changed in the "Edit Settings" step.
If several EVSEs are declared, the identifier of one EVSE is this identifier followed by its index (between 1 and number of evses) and separated by a space. For example, if the identifier is WNEX and the number of EVSE(s) is 3, then the EVSEs' identifiers are:
* WNEX 1
* WNEX 2
* WNEX 3

## Troubleshooting

### I Can't Register My EVSE

- **Check Your Internet Connection**: Ensure you have a stable connection.
- **Incomplete Information**: Verify that all required fields are filled in.
- **OCPP Issues**: Make sure your OCPP configuration is correct. Contact your EVSE manufacturer if you need more information.

### My EVSE Is Not Appearing on the Map

- **Registration Pending**: Your registration may still be under review. Check your email for a confirmation message.
- **Availability Settings**: Ensure that your EVSE is set to be available to the public.

## Support

If you need further assistance, please reach out to our support team via the **Help** section in the web portal or contact us at [support@werenode.com](mailto:support@werenode.com).

---

Thank you for adding your EVSE to the Werenode network! Together, we are building a decentralized and efficient EV charging infrastructure.
