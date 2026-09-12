# The Morning Willow

A responsive wellness business website for The Morning Willow, a Chandler, Arizona practice offering massage and facial services.

The website gives visitors a calm, editorial-style introduction to the business, service highlights, contact information, location details, helpful resources, frequently asked questions, and a direct path to book an appointment through ClinicSense.

## Features

- Responsive React website built with Vite
- Home, Resources, FAQ, and Privacy Policy pages
- Editorial wellness-focused homepage design
- Service overview for massage and facial offerings
- External appointment links to ClinicSense
- Clickable phone number and email address
- Instagram link
- Embedded Google Map and directions link for the Chandler location
- Responsive desktop, tablet, and mobile layouts
- Keyboard focus styles and reduced-motion support
- Reusable React components with component-specific CSS files

## Pages

- `/` - Home
- `/resources` - Wellness resources and articles
- `/faq` - Frequently asked questions
- `/privacy-policy` - Privacy Policy

## Tech Stack

- React
- Vite
- React Router DOM
- CSS
- ClinicSense for appointment scheduling
- Google Maps embed for location details

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The development site opens in Google Chrome automatically.

### Create a production build

```bash
npm run build
```

## Project Structure

```text
src/
  assets/
    images/
  components/
    home/
      AboutPreview/
      BookingCta/
      ContactSection/
      Hero/
      LocationSection/
      PhilosophySection/
      ServicesPreview/
    layout/
      Footer/
      Navbar/
  pages/
    FaqPage/
    HomePage/
    PrivacyPolicyPage/
    ResourcesPage/
  styles/
    global.css
    variables.css
```

## Current Status

The current version includes a complete responsive front-end experience, including branding, navigation, homepage sections, contact details, an embedded location map, booking links, and supporting pages.

## Future Improvements

- Replace temporary service descriptions, durations, and names with final business details
- Add and maintain wellness resources or blog articles
- Review and finalize Privacy Policy content before launch
- Optimize image sizes for production
- Add final domain, deployment, and analytics configuration
- Continue accessibility testing with keyboard and screen-reader checks
