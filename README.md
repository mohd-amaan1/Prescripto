# 🩺 Medisure – Doctor Appointment Booking System

Medisure is a **full-featured healthcare web platform** built to streamline the process of booking medical appointments online. With role-based authentication for **Patients, Doctors, and Admins**, Medisure enables efficient appointment management, real-time earnings dashboards, and **secure payments via Stripe and Razorpay**.

Whether you're a patient looking for a trusted physician, a doctor managing your appointments, or an admin handling the backend — Medisure offers a complete and modern digital solution.

---

## 🚀 Tech Stack

| Tech             | Description                            |
| ---------------- | -------------------------------------- |
| **Frontend**     | React.js (Vite), Tailwind CSS          |
| **Backend**      | Node.js, Express.js                    |
| **Database**     | MongoDB with Mongoose ORM              |
| **Auth**         | JSON Web Tokens (JWT), Cookie Sessions |
| **Payments**     | Stripe, Razorpay (fully integrated)    |
| **Image Upload** | Cloudinary (profile & doctor images)   |

---

## 🔐 User Roles & Authentication

### 👨‍⚕️ Doctor

* Login and manage personal profile.
* View appointment details.
* Dashboard overview: earnings, bookings, patients.
* Update availability and fees.

### 👩‍💼 Admin

* Secure login to access admin dashboard.
* Add, edit, or remove doctor profiles.
* Monitor total doctors, appointments, and patients.
* Cancel or mark appointments as completed.

### 👤 Patient

* Sign up and book appointments.
* Choose payment method: Cash, Stripe, or Razorpay.
* View and manage personal appointments.
* Edit profile and upload profile picture.

---

## ✨ Key Features

* 🔒 **Role-based Auth**: Patient, Doctor & Admin.
* 🩺 **Doctor Management**: Specialty, experience, fees, and availability.
* 📅 **Appointment Booking**: Select doctor, date, time, and payment.
* 💸 **Online Payments**: Cash, Razorpay, Stripe (with live order creation).
* 📊 **Dashboards**: Real-time analytics for Admin and Doctors.
* 🌐 **Responsive UI**: Built using TailwindCSS for all devices.
* ☁️ **Cloudinary**: Seamless image hosting and optimization.

---

## 📍 Pages Overview

### 🏠 Home

* Clean homepage layout with top doctors.
* Specialty-based filters.
* Navigation to About, Contact, Privacy Policy.

### 👨‍⚕️ All Doctors

* Browse and filter doctors by specialization.
* View detailed profiles and book appointments.

### 📄 About

* Overview of Medisure’s vision and advantages.
* Section: *Why Choose Us?*

  * Fast & Efficient Booking.
  * Personalized User Experience.
  * Secure Payments & Privacy.

### 📞 Contact

* Company contact info, office address.
* Job application interest section.

### 📋 Appointment Page

* Doctor’s full details.
* Form with date, time, and payment method.
* Secure checkout experience (Cash / Stripe / Razorpay).
* Suggested related doctors at the bottom.

---

## 🔐 Admin Panel

* **Dashboard**: Total doctors, appointments, patients, and latest activity.
* **Add Doctors**: Form with image, email, password, degree, fees, etc.
* **Manage Doctors**: Edit or remove doctor profiles.
* **Appointments View**: Full list with cancel/complete actions.

---

## 🧑‍⚕️ Doctor Dashboard

* Total earnings display.
* List of upcoming appointments.
* Ability to cancel or complete appointments.
* Profile edit options: fees, availability, address.

---

## 💳 Payment Integration

Medisure offers a **flexible payment model**:

| Method      | Status           |
| ----------- | ---------------- |
| 💵 Cash     | On-site option   |
| 💳 Stripe   | Live Integration |
| 🪙 Razorpay | Live Integration |

All payments are securely handled, and payment status is updated on appointment completion.

---

## 📝 Disclaimer

**Medisure is a portfolio-level project created for demonstration and educational purposes only.**
All medical listings, bookings, and payment integrations are mock implementations. No actual medical services are provided, and all user data is fictitious. This system is not intended for commercial use.

---

## 📬 Connect & Contribute

🔹 **Found a bug?** [Open an issue](https://github.com/mohd-amaan1/Medisure/issues)
🔹 **Have an idea?** Submit a Pull Request!  
🔹 **Need help or want to discuss?** Join the [GitHub Discussions](#)  

⭐ **Love this project? Don’t forget to star it!** ⭐

---

## 🏆 Built with Passion, Shared with the Community

> *“Healthcare should be accessible. Booking should be effortless.”*

Crafted with 💙 by **Mohd Amaan**

---


