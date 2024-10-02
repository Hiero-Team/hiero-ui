# Hiero-UI

## Overview

Hiero-UI is a React-based UI package designed specifically for Hiero developers to easily integrate Hiero Auth into their applications. This package provides pre-built components and utilities to streamline the process of adding authentication and authorization features using Hiero's authentication system.

## Features

- Pre-built React components for common auth flows
- Easy integration with Hiero Auth services
- Customizable UI elements to match your application's design
- TypeScript support for improved developer experience

## Installation

To install Hiero-UI in your project, run:

```bash
npm install @hiero/ui
```

Or using yarn:

```bash
yarn add @hiero/ui
```

## Usage

Here's a quick example of how to use a Hiero-UI component in your React application:

```jsx
import React from 'react';
import { HieroLoginButton } from '@hiero/ui';

function App() {
  const handleLoginSuccess = () => {
    // Handle the successful login here
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <HieroLoginButton onSuccess={handleLoginSuccess} />
    </div>
  );
}

export default App;
```

For more detailed usage instructions and component documentation, please refer to our [official documentation](https://hiero.gl/docs)

## License

Hiero-UI is released under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Support

If you encounter any issues or have questions about using Hiero-UI, please file an issue on our [GitHub repository](https://github.com/Hiero-Team/hiero-ui/issues) or contact our support team at support@hiero.com.

---

Developed with ❤️ by the Hiero Team
