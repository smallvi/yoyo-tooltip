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
        color: '#ffffff',
        boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
    });
    ```

## Param
- id: target element id
- content: Main Text
- direction: Optional, {'top', 'right', 'left', 'bottom'} (Default Top)
- delay: Optional, (Default 0) (1000 = 1 sec)
- trigger: Optional, {'hover','click'} (Default Hover)
- backgroundColor: Optional (Default black)
- color: Optional (Default white)
- boxShadow: Optional

## Sample

[Demo](https://smallvi.github.io/yoyo-tooltip/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.