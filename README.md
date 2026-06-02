# RetrouveMoi - Lost and Found Web Application

RetrouveMoi is a *Lost and Found web application* designed to help users report lost items, browse existing announcements, and connect with people who may have information about missing belongings.

---

## Description

The project consists of:

* A *Client Application* developed with Angular.
* An *Admin Application* developed with Angular.
* A *Backend API* developed with Spring Boot.

The platform allows users to:

* Create and publish lost item announcements.
* Browse announcements published by other users.
* Comment on announcements to provide information about lost items.
* Manage user accounts and announcements through an administration panel.

---

## Features

### Client Side

Users can:

* Register and log in.
* Publish lost item announcements.
* Browse all published announcements.
* View announcement details.
* Add comments to announcements.

### Admin Side

Administrators can:

* Manage announcements.
* Delete inappropriate content.
* Manage user accounts.
* Monitor platform activity.
* Manage application content and settings.

---

## Announcement Management

Each announcement contains:

* Item title
* Description
* Location where the item was lost
* Date of loss
* Contact information
* Image of the lost item (if available)

---

## Technologies

### Frontend

* Angular
* TypeScript
* HTML
* CSS

### Backend

* Spring Boot
* Java
* Maven

### Database

* MySQL

---

## Project Structure

```text
RetrouveMoi/
│
├── front/          # Client-side Angular application
│
├── admin/          # Admin-side Angular application
│
└── backend/        # Spring Boot backend API
```

---

## Installation and Execution

### Prerequisites

Make sure the following tools are installed:

* Java JDK 17 or later
* Maven
* Node.js (recommended version 18 or later)
* Angular CLI
* MySQL

---

### Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Configure the database connection in:

```properties
src/main/resources/application.properties
```

3. Run the Spring Boot application:

```bash
mvn spring-boot:run
```

Or run the main application class directly from your IDE.

---

### Client Application Setup

1. Navigate to the client project:

```bash
cd front
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
ng serve
```

4. Open:

```text
http://localhost:4200
```

---

### Admin Application Setup

1. Navigate to the admin project:

```bash
cd admin
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
ng serve
```

4. Open:

```text
http://localhost:4201
```

(Use the port configured in your Angular project.)

---

## Usage

### User

1. Create an account or log in.
2. Publish a lost item announcement.
3. Browse announcements from other users.
4. Comment on announcements if you have relevant information.
5. Manage your own announcements.

### Administrator

1. Log in to the admin dashboard.
2. Manage users and announcements.
3. Remove inappropriate content.
4. Monitor platform activity.

---

## Future Improvements

* Real-time notifications.
* Email notifications.
* Advanced search and filtering.
* Mobile application.
* Geolocation support.
* AI-powered item matching.

---

## Authors

Developed as an academic project using Angular and Spring Boot.
