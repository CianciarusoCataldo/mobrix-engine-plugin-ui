# MoBrix-engine-plugin-ui

![NPM](https://img.shields.io/npm/l/mobrix-engine-plugin-ui?label=License&style=for-the-badge)
![npm](https://img.shields.io/npm/v/mobrix-engine-plugin-ui?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/min/mobrix-engine-plugin-ui?label=Package%20size&style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

<br>

Manage ui properties with [MoBrix-engine system](https://github.com/CianciarusoCataldo/mobrix-engine)

<br>

---

## Getting started

<br>

### Installation

Check [MoBrix-engine guide](https://cianciarusocataldo.github.io/mobrix-engine/docs) to init the system

If you want to use this plugin with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine), install it:

```sh
npm i mobrix-engine-plugin-ui
```

<br>

### Usage

Include this plugin inside your MoBrix-engine config file, and optionally set the `ui` field, with the plugin settings:

- `darkMode` : initial dark mode

For example:

```tsx
const uiPlugin = require("mobrix-engine-plugin-ui");

const config = {
  appName: "custom-app",
  plugins: [uiPlugin],
  ui: {
    darkMode: true,
    onDarkModeChange: [(darkMode) => console.log("new dark mode " + darkMode)],
  },
};

module.exports = { config };
```

<br>

You can see a live preview by visiting [MoBrix-engine playground](https://cianciarusocataldo.github.io/mobrix-engine/)

---

## API

### Config

This plugin adds a custom field inside the MoBrix-engine config, `ui`. This new field contains 1 field, to easily integrate new functions:

| Setting            | Description                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onDarkModeChange` | - array of callbacks called everytime the dark-mode is enabled or disabled                                                                                     |
| `drawer`           | - enable/disable drawer management. If true, a new field will be included into the state, `isDrawerOpen`, to drive the drawer visibility with standard actions |

### Actions

| Action creator | Arguments                      | Effect                     |
| -------------- | ------------------------------ | -------------------------- |
| `setDarkMode`  | - `darkMode`: dark-mode to set | Switch dark-mode to on/off |
| `openDrawer`   | /                              | open the drawer            |
| `closeDrawer`  | /                              | close the drawer           |

<br>

Import them from this lib:

```tsx
import { setDarkMode } from "mobrix-engine-plugin-ui";
```

Then dispatch them from any part of your app:

```tsx
import { setDarkMode } from "mobrix-engine-plugin-ui";

import { useDispatch } from "react-redux";

export const DarkModeButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(setDarkMode(true));
      }}
    >
      Enable dark mode
    </button>
  );
};
```

<br>

### Selectors

| Selectors      | Returns                                                                       |
| -------------- | ----------------------------------------------------------------------------- |
| `getUIView`    | Ui state, or default state if not enabled                                     |
| `isInDarkMode` | Actual dark-mode status (on/off)                                              |
| `isInDarkMode` | Actual drawer visibility (always false if the `drawer` option is not enabled) |

<br>

Import them from this lib:

```tsx
import { getUIView, isInDarkMode, isDrawerOpen } from "mobrix-engine-plugin-ui";
```

Then you can use them, with selectors hooks, inside your components (in this example, a [MoBrix-ui](https://github.com/CianciarusoCataldo/mobrix-ui) component is used, all of them natively support dark-mode):

```tsx
import { useSelector } from "react-i18next";
import { isInDarkMode } from "mobrix-engine-plugin-ui";
import { Container } from "mobrix-ui";

export const CustomComponent = () => {
  const darkMode = useSelector(isInDarkMode);

  return (
    <Container dark={darkMode}>
      <p>{`dark mode is ${darkMode ? "enabled" : "disabled"}`}</p>
    </Container>
  );
};
```

<br>

---

## Integration with other plugins

- This plugin expose some fields to work with any other plugin. If you want to interact with it, using your custom plugin, add an `interaction` for `ui` plugin:

```tsx
//Just a skeleton of a custom plugin that interacts with ui plugin
const customPlugin = () => ({
  // Custom plugin stuffs

  interactions: [
    {
      plugin: "mobrix-engine-ui",
      effect: (uiConfig) => {
        // Custom plugin stuffs

        //Add the custom callback
        uiConfig.onDarkModeChange.push(() => {
          alert("dark mode status is changed");
        });
      },
    },
  ],
});
```

<br>

- Additionally, if you use [MoBrix-engine-plugin-url-checker](https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker) too, you can change the initial dark-mode status directly from URL, with query parameters, by passing the `dark` parameter with the darkMode status you want to set. Try it with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) playground (look at query parameters inside url) - https://cianciarusocataldo.github.io/mobrix-engine?dark=false

<br>

---

## Included libraries

- [MoBrix-engine-tools](https://github.com/CianciarusoCataldo/mobrix-engine-tools) - to easily work with MoBrix-engine
- [MoBrix-utils](https://github.com/CianciarusoCataldo/mobrix-utils) - to use shared util functions during init process
- This library is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
