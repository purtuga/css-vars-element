#   CSS Vars Element

A Custom Element that sets a series of CSS Variables that child components can use to style themselves.  The goal of this element is to allow for the creation of widgets (custom elements) that are free from framework specific implementations by allow them to pull in common values from these variables. The element can then serve as the "proxy" between different types of CSS frameworks and the components that base themselves on this element. 

For a list of css variables available, see `src/index.js`

#   Usage

```javascript
import {CssVars} from "css-vars-element";

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

# License

[MIT](LICENSE)


# TODO

- [ ] Add support for being able to set the vars on given selector or :root alias
- [ ] Add method to apply vars
- [ ] Add support for listening to 'set-theme' event (should be given them name or object with vars)
- [ ] Add ability to define theme to display via html attribute on the CE
- [ ] Add widget that allow user to select their own theme
