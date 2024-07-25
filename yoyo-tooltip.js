/*! Yoyo Tooltip v1.0.0 (https://github.com/smallvi/yoyo-tooltip) */
function addTooltipStyles() {
  if (document.getElementById('yoyo-tooltip-styles')) return;

  const style = document.createElement('style');
  style.id = 'yoyo-tooltip-styles';
  style.textContent = `
    .yoyo-tooltip {
      position: absolute;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
    }

    .yoyo-tooltip.top {
      transform: translateX(-50%);
      bottom: 125%;
      left: 50%;
    }

    .yoyo-tooltip.top::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--tooltip-bg-color) transparent transparent transparent;
    }

    .yoyo-tooltip.right {
      transform: translateY(-50%);
      top: 50%;
      left: 125%;
    }

    .yoyo-tooltip.right::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent var(--tooltip-bg-color) transparent transparent;
    }

    .yoyo-tooltip.bottom {
      transform: translateX(-50%);
      top: 125%;
      left: 50%;
    }

    .yoyo-tooltip.bottom::after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent var(--tooltip-bg-color) transparent;
    }

    .yoyo-tooltip.left {
      transform: translateY(-50%);
      top: 50%;
      right: 125%;
    }

    .yoyo-tooltip.left::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent transparent var(--tooltip-bg-color);
    }

    .yoyo-tooltip.fade-in {
      opacity: 1;
      visibility: visible;
    }

    .yoyo-tooltip-text {
      text-decoration: underline dotted red 1px;
      text-underline-offset: 5px;
    }
  `;
  document.head.appendChild(style);
}

function yoyoTooltip({ id, direction = 'top', content, delay = 0, trigger = 'hover', backgroundColor = '#333', color = 'white' }) {
  addTooltipStyles();

  const element = document.querySelector(id);

  if (!element) return;

  const tooltip = document.createElement('div');
  tooltip.className = `yoyo-tooltip ${direction}`;
  tooltip.innerHTML = content;
  tooltip.style.backgroundColor = backgroundColor;
  tooltip.style.color = color;

  tooltip.style.setProperty('--tooltip-bg-color', backgroundColor);

  element.style.position = 'relative';
  element.appendChild(tooltip);

  const textTags = ['SPAN', 'P', 'A', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'STRONG']; // 这里可以根据需要添加更多的标签名
  if (textTags.includes(element.tagName)) {
    element.classList.add('yoyo-tooltip-text');
  }

  const showTooltip = () => {
    setTimeout(() => {
      tooltip.classList.add('fade-in');
    }, parseInt(delay));
  };

  const hideTooltip = () => {
    tooltip.classList.remove('fade-in');
  };

  if (trigger === 'hover') {
    element.addEventListener('mouseenter', showTooltip);
    element.addEventListener('mouseleave', hideTooltip);
  } else if (trigger === 'click') {
    element.addEventListener('click', () => {
      if (tooltip.classList.contains('fade-in')) {
        hideTooltip();
      } else {
        showTooltip();
      }
    });
  }
}

window.yoyoTooltip = yoyoTooltip;