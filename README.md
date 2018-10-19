#   CSS Vars Element

A Custom Element that sets a series of CSS Variables that child components can use to style themselves.  The goal of this element is to allow for the creation of widgets (custom elements) that are free from framework specific implementations by allow them to pull in common values from these variables. The element can then serve as the "proxy" between different types of CSS frameworks and the components that base themselves on this element. 

## Showcase
Go here to see a showcase of the CSS Vars that are made available:

https://codepen.io/purtuga/full/ReowqX

Or, view the [vars-default.js](srs/vars-default.js) file.

#   Usage

```javascript
import {CssVars} from "css-vars-element.esm.min.js";

CssVars.define();

document.querySelector("#ui").innerHTML = `
<css-vars>
    <div style="
        background: var(--theme-color-9, #000);
        color: var(--theme-color-0, #fff);
    ">
        <p>A test paragraph</p>
    </div>
</css-vars>
`;
```

Using the `import` bundle which will automatically register the element:

```html
<body>
    <css-vars target=":root">
        <div style="
            background: var(--theme-color-9, #000);
            color: var(--theme-color-0, #fff);
        ">
            <p>A test paragraph</p>
        </div>
    </css-vars>
    <script src="path/to/css-vars-element.import.min.js"></script>
</body>
```

# API

```html
<css-vars 
    target?
    vars?
></css-vars>
```

## Props

-   `target`: Supported as either an HTML attribute or instance property. If defined as string, it will be treated as a selector that will be used to select the target elements to which the vars will be set. Could also be set as an HTMLElement.
    >   NOTE: The following element are treated special:
        -   `<style>`: the entire content of the style element is managed. CSS Vars will be written to it under the `:root` selector definition.
        -   `:root`: A `<style` element will be created at the start of the `<head>` element, which will then be used to write the CSS Vars to. CSS Vars will be written to it under the `:root` selector definition.
-   `vars`: Only supported as an instance property. An object with the CSS Variables that should be set.


# Distribution Bundles

The `dist` folder contains the following built bundles:

-   `css-vars-element.umd.min.js`: A ES6 bundle version supporting UMD
-   `css-vars-element.esm.min.js`: A ES6 Module
-   `css-vars-element.import.min.js`: An ES6 bundles that auto registers the Element into the browser. 
-   `css-vars-element.import.legacy.min.js`: An ES5 transpiled bundle that auto registers the Element into the browser. 
-   `css-vars-element.legacy.umd.min.js`: An ES5 transpiled bundle supporting UMD


# License

[MIT](LICENSE)


# TODO

- [x] Add support for being able to set the vars on given selector or :root alias
- [x] Add method to apply vars (using vars prop)
- [x] Add support for listening to 'set-vars' event (should be given them name or object with vars)
- [x] Add ability to define theme to display via html attribute on the CE (vars)
- [x] Add widget that allow user to select their own theme
- [x] Theme editor
