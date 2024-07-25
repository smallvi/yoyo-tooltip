# Yoyo Tooltip

## Author
- Yeo
- smallvi@gmail.com

## Introduction

This plugin provides a customizable tooltip without any dependencies.

<!-- ## Screenshot

![Yoyo Tooltip](images/sample_yoyo_toast.png) -->

## Installation

Include the following files in your project:

- `yoyo-tooltip.min.js`

## Usage

1. Include `yoyo-tooltip.min.js` in your HTML file:

   ```html
   <script src="path/to/yoyo-tooltip.min.js"></script>
   ```

2. Initialize the plugin in your JavaScript:
    
    ### Simple Yoyo Tooltip

    ```javascript
    yoyoTooltip({
        id: '#text',
        content: '😂 Simple Tooltip on text',
    });
    ```
    
    ### Advance Yoyo Tooltip

    ```javascript
    yoyoTooltip({
        id: '#top',
        content: '😍<strong>Hello Worlds</strong>',
        direction: 'top',
        delay: '0',
        trigger: 'hover',
        backgroundColor: '#ff0000',
        color: '#ffffff'
    });
    ```

## Param
- id: target element id
- content: Main Text
- direction: {'top', 'right', 'left', 'bottom'} (Default Top)
- delay: Default 0 (1000 = 1 sec)
- trigger: {'hover','click'} (Default Hover)
- backgroundColor: Default black
- color: Default white

## Sample

[Demo](https://smallvi.github.io/yoyo_tooltip/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.