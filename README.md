# Hiero-UI


## Overview

Hiero-UI is a React-based UI package designed specifically for Hiero developers to easily integrate Hiero Auth into their applications. This package provides pre-built components and utilities to streamline the process of adding authentication and authorization features using Hiero's authentication system.

![alt text](image.png)


## Features

- Pre-built React components for common auth flows
- Easy integration with Hiero Auth services
- Customizable UI elements to match your application's design
- TypeScript support for improved developer experience

## Installation

To install Hiero-UI in your project, run:

```bash
npm install hiero-ui
```

Or using yarn:

```bash
yarn add hiero-ui
```

## Usage

Here's a quick example of how to use the `HieroCheckoutButton` component in your React application:

```jsx
import React from 'react';
import { HieroCheckoutButton } from 'hiero-ui';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <HieroCheckoutButton 
        appName="your-app-name"
        redirectUrl="https://your-app.com/success"
        email="user@example.com" // Optional
      />
    </div>
  );
}

export default App;
```

The `HieroCheckoutButton` component accepts the following props:

- `appName` (required): The name of your application registered with Hiero.
- `redirectUrl` (required): The URL to redirect to after successful checkout.
- `email` (optional): Pre-fill the user's email if known.

When clicked, the button will redirect the user to the Hiero checkout page with the provided parameters.

For more detailed usage instructions and component documentation, please refer to our [official documentation](https://hiero.gl/docs)

## License

Hiero-UI is released under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Support

If you encounter any issues or have questions about using Hiero-UI, please file an issue on our [GitHub repository](https://github.com/Hiero-Team/hiero-ui/issues) or contact our support team at support@hiero.com.

---

Developed with ❤️ by the Hiero Team
