# Google Analytics 4 Tracking Implementation

## Overview
Comprehensive GA4 event tracking has been implemented across the Fermi Dev website to track user interactions, conversions, and engagement metrics.

## Google Analytics Setup
- **Property ID**: G-M75JYN9WVM
- **Location**: `/index.html` (lines 4-12)
- **Type**: Single-page application (SPA) with React Router

## Files Created

### 1. `/utils/analytics.ts`
Core analytics utility with all tracking functions:
- Custom event tracking
- CTA clicks
- Navigation tracking
- Form interactions
- Conversion events
- Demo requests
- Pricing interactions
- Content engagement
- Media interactions
- Scroll depth tracking
- Engagement time tracking
- Social media clicks
- FAQ interactions
- Feature interactions
- Error tracking
- Search tracking
- Page view tracking for SPA

### 2. `/hooks/usePageTracking.ts`
React hook for automatic page-level tracking:
- Tracks page views
- Monitors engagement time
- Initializes scroll depth tracking
- Auto-cleanup on unmount

## Tracking Events Implemented

### 1. **CTA Button Tracking**
**Components**: Hero, Pricing, FAQ
- Event: `cta_click`
- Parameters: `cta_name`, `cta_location`
- Examples:
  - "Start Free Trial" (Hero Section)
  - "Watch Demo" (Hero Section)
  - Plan selection (Pricing)
  - "Contact Support" (FAQ)

### 2. **Demo Request Tracking**
**Components**: Hero
- Event: `demo_request`
- Parameters: `source`
- Conversion: Automatically tracked as conversion
- Sources: `hero_cta`, `hero_demo`

### 3. **Pricing Interactions**
**Component**: Pricing
- Events:
  - `view_pricing_page` - When pricing section loads
  - `select_plan` - When user selects a plan
- Parameters: `plan_name`

### 4. **Navigation Tracking**
**Component**: Footer
- Event: `navigation`
- Parameters: `destination`, `source`
- Tracks all footer link clicks:
  - Product links (Features, Pricing, Integrations, API, Security)
  - Company links (About, Blog, Careers, Press, Partners)
  - Legal links (Privacy Policy, Terms, Cookie Policy)

### 5. **Social Media Tracking**
**Component**: Footer
- Event: `social_click`
- Parameters: `platform`, `location`
- Platforms tracked: LinkedIn, Twitter

### 6. **FAQ Interactions**
**Component**: FAQ
- Event: `faq_interaction`
- Parameters: `question`
- Tracks which questions users click on

### 7. **Scroll Depth Tracking**
**Automatic on all pages**
- Event: `scroll_depth`
- Parameters: `depth_percentage`, `page_path`
- Milestones: 25%, 50%, 75%, 90%, 100%

### 8. **Engagement Time Tracking**
**Automatic on all pages**
- Event: `engagement_time`
- Parameters: `page_name`, `time_seconds`
- Only tracks sessions > 3 seconds

### 9. **Page View Tracking**
**Hook**: usePageTracking
- Implemented on: Home page
- Tracks SPA navigation
- Parameters: `page_path`, `page_title`

### 10. **Conversion Events**
**Automatic conversions**:
- Demo requests
- Plan selections (configurable)
- Form submissions (ready to implement)

## Available But Not Yet Implemented

These tracking functions are available in `/utils/analytics.ts` and ready to use:

1. **Form Tracking**
   - `trackFormStart(formName)`
   - `trackFormSubmit(formName, success)`

2. **Content Engagement**
   - `trackContentEngagement(contentType, contentName, engagementTime)`

3. **Media Interactions**
   - `trackMediaInteraction(mediaType, action, mediaName)`

4. **Outbound Links**
   - `trackOutboundLink(url, linkText)`

5. **Feature Interactions**
   - `trackFeatureInteraction(featureName, action)`

6. **Error Tracking**
   - `trackError(errorType, errorMessage)`

7. **Search Tracking**
   - `trackSearch(searchTerm, resultsCount)`

## How to View Data in Google Analytics

### Real-Time Reports
1. Go to Google Analytics → Reports → Realtime
2. See live user activity and events

### Event Reports
1. Go to Reports → Engagement → Events
2. View all custom events being tracked

### Conversion Reports
1. Go to Reports → Engagement → Conversions
2. Track demo requests and other conversions

### User Engagement
1. Go to Reports → Engagement → Pages and screens
2. See scroll depth and engagement time

## How to Add Tracking to New Components

### Example: Track a Button Click
```typescript
import { trackCTAClick } from '../utils/analytics';

<Button onClick={() => {
  trackCTAClick('Button Name', 'Component Location');
  // Your button logic
}}>
  Click Me
</Button>
```

### Example: Add Page Tracking
```typescript
import { usePageTracking } from '../hooks/usePageTracking';

export default function MyPage() {
  usePageTracking('page-name', 'Page Title');
  // Rest of component
}
```

### Example: Track Form Submission
```typescript
import { trackFormStart, trackFormSubmit } from '../utils/analytics';

const handleFormFocus = () => {
  trackFormStart('Contact Form');
};

const handleSubmit = async (data) => {
  try {
    await submitForm(data);
    trackFormSubmit('Contact Form', true);
  } catch (error) {
    trackFormSubmit('Contact Form', false);
  }
};
```

## Best Practices

1. **Consistent Naming**: Use clear, descriptive names for events and parameters
2. **Location Context**: Always include location/source in tracking calls
3. **Avoid PII**: Never track personally identifiable information
4. **Test Events**: Use GA4 DebugView to verify events are firing correctly
5. **Document Changes**: Update this file when adding new tracking

## Next Steps

To expand tracking coverage:

1. Add form tracking to Contact page
2. Implement feature interaction tracking
3. Track blog post engagement
4. Add video/demo interaction tracking
5. Implement search tracking if search is added
6. Track outbound links to external resources

## Debugging

To see events in browser console:
```javascript
// Enable debug mode
window.gtag('config', 'G-M75JYN9WVM', { debug_mode: true });
```

Or use GA4 DebugView:
1. Install Google Analytics Debugger extension
2. Enable it on your site
3. View real-time events in GA4 DebugView
