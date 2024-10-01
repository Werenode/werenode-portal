---
sidebar_position: 7
---

# Installing a Shelly Connected Plug or Switch and Sharing with EV Users

Welcome to this guide on installing a **Shelly connected plug or switch** and sharing it on the Werenode platform. This user manual will help you set up your plug or switch, connect it to the Werenode ecosystem, and share it with other EV users for charging purposes.

## Introduction

**Shelly plugs and switches** are IoT devices that can be integrated with the Werenode platform to manage electric vehicle charging. By sharing your plug or switch through the Werenode platform, you can allow other EV users to access, manage, and pay for charging using blockchain technology.

## Prerequisites

Before you start, ensure you have:

1. **Shelly Plug or Switch**: Make sure you have a Shelly smart plug or switch that you want to install.
2. **Internet Connection**: You need a stable Wi-Fi connection to connect the Shelly device to the internet.
3. **Werenode Account**: An active Werenode account to register and share the plug or switch.
4. **Smartphone**: A smartphone to use the **Shelly App** and **Werenode Mobile App**.

## Step 1: Install the Shelly Plug or Switch

### 1.1 Physical Installation

1. **Install a Suitable Socket**: Install the Shelly smart plug with a direct and separate line to your electrical distribution board.
2. **Connect Your Charger**: Plug your EV charger into the Shelly plug to control the power supply to your electric vehicle.
3. **Power On**: Ensure the Shelly plug is powered on; you should see an LED indicator light.

### 1.2 Shelly App Setup

1. **Download the Shelly App**: Get the **Shelly App** from the Google Play Store or Apple App Store.
2. **Create an Account**: If you don't already have a Shelly account, create one by following the prompts in the app.
3. **Add a New Device**:
   - Open the Shelly app and tap on the **Add Device** button.
   - Follow the on-screen instructions to connect the Shelly plug to your Wi-Fi network.
4. **Test the Connection**: After setup, you should be able to control the plug using the Shelly app.

## Step 2: Integrate Shelly Plug with Werenode

### 2.1 Enable MQTT Protocol for Communication

Werenode uses the **MQTT protocol** to manage IoT-connected devices like Shelly plugs.

1. **Access Device Settings**:
   - Open the Shelly app and select your Shelly plug.
   - Go to **Settings** and find the **Internet & Security** section.
2. **Enable MQTT**:
   - Turn on **MQTT** and enter the **MQTT broker URL** provided by the Werenode platform.
   - Enter the **username** and **password** for authentication as provided in your Werenode dashboard.

### 2.2 Register the Plug on Werenode (currently beta, contact us directly)

1. **Log In to Werenode**: Open the **Werenode mobile app** and log in to your account.
2. **Navigate to My Devices**:
   - Go to the **Dashboard** and click on **My Devices**.
   - Click on **Register Device**.
3. **Enter Device Information**:
   - **Device Name**: Give your Shelly plug a unique name (e.g., "Home EV Charger").
   - **Device Type**: Select **Shelly Plug/Switch** from the options.
   - **Location**: Enter the location of your device, either by address or GPS coordinates.
   - **Availability**: Specify when the device is available for public use, such as **24/7** or specific times of the day.
4. **MQTT Settings Confirmation**:
   - Confirm the MQTT settings by entering the **MQTT credentials** used in the Shelly app.

### 2.3 Test Integration

1. **Test Control via Werenode App**:
   - After registration, check if you can see the device in your **My Devices** list.
   - Tap on the device and click **Turn On/Off** to verify that it is properly responding.

## Step 3: Share the Plug with Other EV Users

### 3.1 Set Sharing Preferences

1. **Go to Sharing Options**:
   - In the Werenode app, navigate to **My Devices** and select your Shelly plug.
   - Click on **Sharing Options**.
2. **Set Access Level**:
   - Choose whether the plug is **Public** (accessible to all Werenode users) or **Private** (shared only with selected users).
   - If **Private**, add the email addresses of the users you want to share it with.
3. **Define Pricing**:
   - Set a price per **kWh** or per **session** for charging. You can also choose a **free option** if you want to share without payment.

### 3.2 Make the Plug Available on the Werenode Network

1. **Publish Your Plug**:
   - Click **Publish** to make your plug visible to other EV users on the Werenode map.
2. **Verify Availability**:
   - Open the map on the Werenode app and verify that your Shelly plug is listed at the correct location.

## Step 4: Monitoring and Managing Your Plug

### 4.1 Real-Time Monitoring

- **Energy Consumption**: View the total energy consumed through your plug.
- **Session Data**: See detailed charging session information, including user details, duration, and revenue.

### 4.2 Edit Device Information

If you need to update any details, such as availability or pricing:

1. **Navigate to My Devices** in the Werenode app.
2. Select your Shelly plug and click on **Edit** to update the necessary information.

### 4.3 Deactivation

If you need to temporarily make your plug unavailable:

- Go to the **Device Settings** and toggle the **Availability** to **Inactive**.

## Troubleshooting

### The Plug is Not Responding

- **Check Wi-Fi Connection**: Ensure the Shelly plug is connected to a stable Wi-Fi network.
- **MQTT Settings**: Verify that the MQTT broker URL, username, and password are correctly configured in the Shelly app.

### The Plug is Not Visible on Werenode Map

- **Registration Pending**: Make sure your plug registration has been approved by the Werenode team.
- **Availability Settings**: Verify that the plug is set to **Public** and available during the selected hours.

## Support

If you need further assistance with your Shelly plug or Werenode integration, you can contact Werenode support at [support@werenode.com](mailto:support@werenode.com) or use the **Help** section in the mobile app.

---

By following this guide, you can easily install a Shelly connected plug or switch, integrate it with the Werenode platform, and share it with other EV users. This way, you help build a community-focused, decentralized charging network and make electric vehicle charging more accessible for everyone!
