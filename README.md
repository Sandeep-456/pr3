# 📧 Lead Generation System with n8n & SendGrid

## 📌 Objective

This project is a simple **lead generation and notification system** built using [n8n](https://n8n.io/) and [SendGrid](https://sendgrid.com/). It allows automatic email notifications when new lead information is collected.

---

## 🛠 System Setup

### 1. Prerequisites

- [n8n](https://docs.n8n.io/) installed (local/cloud)
- A **SendGrid account** with a valid API key
- Verified sender email in SendGrid

---

### 2. How to Set Up and Run

#### a. Create Workflow in n8n

1. **Trigger Input**  
   Add a trigger (e.g., Webhook or form submission) to collect:

   - `name`
   - `email`
   - `company`
   - `message`

2. **Configure SendGrid Node**

- **Operation**: `Send`
- **Sender Email**: Your verified email (e.g., `you@example.com`)
- **Recipient Email**: Your or your team's email to receive lead details
- **MIME Type**: `Plain Text`
- **Message Body**:
  ```txt
  New Lead Details:
  Name: {{$json["name"]}}
  Email: {{$json["email"]}}
  Company: {{$json["company"]}}
  Message: {{$json["message"]}}
  ```

3. **Add Credentials**

- Navigate to `API Credentials` in n8n
- Add a **SendGrid credential** using your API key

4. **Test the Workflow**

- Trigger the workflow manually or through form input
- You should receive an email with lead details

---

## 🔄 Integration with Backend

This system integrates with any frontend/backend through:

- **Webhook Trigger**: Send POST requests to your n8n workflow URL
- **Form Backend**: Submit form data via HTTP to n8n
- **APIs**: Connect external APIs or tools via HTTP nodes in the workflow

n8n serves as the **logic and automation layer**, sitting between your frontend/form and email/CRM services.

---

## 🔧 How to Extend This System

Here are future extension ideas:

### 1. 🎯 Lead Qualification

- Add logic to filter or score leads (e.g., using expression nodes or JavaScript function nodes)

### 2. 🤝 CRM Integration

- Use n8n nodes for:
  - **HubSpot**
  - **Zoho CRM**
  - **Salesforce**
- Automatically push qualified leads to your CRM

### 3. 📊 Google Sheets or Database Logging

- Store every lead in:
  - Google Sheets (using Google Sheets node)
  - MySQL/PostgreSQL (using database nodes)

### 4. 📈 Analytics Integration

- Send lead data to analytics tools (e.g., Google Analytics, Mixpanel)

---

## 📸 Sample Screenshot

> ![n8n SendGrid Email Node](./screenshot.png)  
> _SendGrid node configured with dynamic message body in n8n_

---

## 📄 Files in This Project

| File             | Description                      |
| ---------------- | -------------------------------- |
| `README.md`      | This file                        |
| `workflow.json`  | Exported n8n workflow (optional) |
| `screenshot.png` | Screenshot of n8n configuration  |

---

## ✅ Expected Outcome

- A functioning automation that sends lead info via email
- Clear documentation to support usage and future extension

---

## 📃 License

MIT License. Feel free to use and modify.

---

## 🙋 Need Help?

For any questions or issues, feel free to create a discussion or connect via [n8n community](https://community.n8n.io/).
