# Project Title

**Travelopia Take Home Test**

- https://travelopia-test.vercel.app/

### Description

The Travelopia Take-Home Test is an assignment provided as part of the interview process at Travelopia, a leading company in the travel and tourism industry.

### App Component Documentation

The App component serves as the entry point for the project. It is responsible for rendering the core layout and structure of the application by combining and arranging different components. In this specific implementation, the Header, Banner, and Footer components are composed to create a complete user interface.

#### Components Used:

1. Header: This component represents the top navbar, containing navigation menus, branding, and user-related information.
2. Banner: This component represents a banner, showcasing a visually engaging message, call-to-action.
3. Footer: This component represents the footer, includes copyright, and socia media links.

#### Header Component Documentation

The Header component is a functional component. It includes features for responsive navigation, a user menu, and toggle buttons for displaying/hiding the navigation menu on mobile devices. The header is designed using Tailwind CSS for styling and incorporates various React components and functionalities.

##### Components and Libraries Used:

1. `AiOutlineClose` and `CgMenuRight` from the react-icons library: These icons are used to represent the menu open and close buttons for mobile navigation.
2. `Link` from `react-router-dom`: This component is used to create links to different routes within the application.
3. `useState` from `React`: This hook is used to manage the state of whether the navigation menu is visible or hidden.

##### Key Features:

1. Branding: The brand name "Travelopia" which is a link to the home page (/ route).

2. Navigation Menu:

- The navigation menu provides links to different sections of the application in this case I kept it blank
- It uses an unordered list (ul) with list items (li) to display the navigation links.
- The menu items include "Home," "About Us," and "Our Brands," each represented by a Link component.
- The menu is hidden on small screens (md:hidden) and is revealed when the menu icon is clicked.

3. User Menu:

- The user menu section is represented by an icon button that, when clicked, reveals user-related information.
- The user's name, location, and a timestamp are displayed.

4. Mobile Navigation:

- The component includes toggle buttons to switch between the menu icon and the close icon.
- When the menu icon is clicked, the navigation menu becomes visible (hidden md:block) and the close icon is displayed.
  When the close icon is clicked, the navigation menu is hidden.

Functionality:

- The useState hook manages the state of isMenuVisible, which determines whether the navigation menu and user menu are visible or hidden.
- Clicking the menu icon or close icon toggles the isMenuVisible state, thus controlling the visibility of the navigation and user menus.

Styling:

- Tailwind CSS classes are used for styling, including text sizes, colors, and layout properties.
- Conditional class rendering is utilized to show/hide elements based on the isMenuVisible state.

#### Banner Component Documentation

The Banner component is a React functional component responsible for rendering a visually striking and engaging banner section on a web page. It features a full-width image background with overlaid text content and a call-to-action button.

Structure and Styling:

- The Banner component is wrapped in a main element, representing its primary content area on the web page.
- The banner consists of an article element that contains a figure element, within which the main visual and content elements are nested.
- An img element displays a high-resolution image, covering the entire width and height of the banner section.
- A figcaption element overlays the image, providing a semi-transparent background for the text content and call-to-action button.
- Tailwind CSS classes are applied to style the banner, ensuring responsive design and appropriate spacing.

Content:

- The heading consists of two lines, each wrapped in a strong element, enhancing the typography and emphasizing key phrases.
- A call-to-action button is included at the bottom of the banner, encouraging user interaction. The button triggers an alert with the message "Hello World!" when clicked.

Functionality:

The call-to-action button utilizes an onClick event handler to display an alert message when clicked. In this example, the alert simply shows "Hello World!".

#### Footer Component Documentation

The Footer component is a React functional component, includes social media links and copyright information.

Components Used:

- `FaLinkedin`, `FaFacebookSquare`, `FaTwitter` from the react-icons/fa library: Represents links to the respective social media platforms.
- `Link` from `react-router-dom`: This component is used to create links to different routes within the application. Here in this case I kept it blnk

Structure and Styling:

- The Footer component is wrapped in a footer element, representing the footer section of the webpage.
- The footer is divided into two main sections: copyright information and social media links.
  Tailwind CSS classes are used for styling, including text color, background color, and layout properties.

Content:

The footer includes a small copyright notice that displays the text "© Travelopia".
Social media links are provided for Twitter, LinkedIn, and Facebook, each represented by an icon from the react-icons library.

Functionality:

The social media links are represented by `Link` elements with the appropriate to attributes, which is blank.

#### Tailwind CSS Styles Documentation

Tailwind CSS styles written within an SCSS (Sass) file. These styles are structured and categorized for various sections of a web application, including common elements, the banner section, navigations, user menu, and animations.

Common Styles:

- `.common`: This class is applied to a common container for consistent styling across the application used inside `header` and `footer` element . It sets the height to 100px and aligns flex items at the center. Within this container, the `.wrapper` class applies styles for a centered container with a left-to-right flex layout and space between items.

Banner Styles:

- `.banner`: This class is used to set the height of the banner section to a calculated value based on the viewport height minus 200px, creating a responsive and visually engaging banner.

Navigation Styles:

- .`navigations`: This class is applied to navigation lists (<ul>) within the application. It adds left margin to list items (<li>) for spacing.
- .`header_nav`: This class is used for the top navigation menu. Within the `.menu` class, it applies flex layout for larger screens (md:flex), and for screens with a maximum width of 768px, it transitions into an absolute position, occupying the full width and height with specific styling.

User Menu Styles:

- .user-menu: This class is used to style the user menu section. For larger screens, it is initially hidden (md:hidden) but becomes visible with specific styling when the user hovers over the .user element. It adds background color, padding, and shadow to the user menu wrapper.

Animations:

- @keyframes openMenu: This keyframe animation defines the opening animation for the mobile menu. It gradually increases the width and height of the menu container while adjusting opacity for a smooth transition effect.
