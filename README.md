# Yoyo Tooltip

## Author
- Yeo
- smallvi@gmail.com

## Introduction

This plugin provides a customizable tooltip without any dependencies.

## Screenshot

![Yoyo Tooltip](images/sample_yoyo_tooltip.png)

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
        id: '#text',
        content: '😎 <strong>Advance Tooltip</strong> on text',
        direction: 'top',
        delay: '0',
        trigger: 'hover',
        backgroundColor: '#ff0000',
        color: '#ffffff',
        boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
        targetHighlight: true,
        targetTextDecoration: 'underline wavy red 1px',
        targetUnderlineOffset: '10px',
        targetBackgroundColor: 'yellow',
        targetFontWeight: 'bold',
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
- targetHighlight: Optional, {true, false} (Default true)
- targetTextDecoration: Optional
- targetUnderlineOffset: Optional
- targetBackgroundColor: Optional
- targetFontWeight: Optional


## Sample

[Demo](https://smallvi.github.io/yoyo-tooltip/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.