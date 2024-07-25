/*! Yoyo Tooltip v1.0.0 (https://github.com/smallvi/yoyo_tooltip) */
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
  
      .yoyo-tooltip.right {
        transform: translateY(-50%);
        top: 50%;
        left: 125%;
      }
  
      .yoyo-tooltip.bottom {
        transform: translateX(-50%);
        top: 125%;
        left: 50%;
      }
  
      .yoyo-tooltip.left {
        transform: translateY(-50%);
        top: 50%;
        right: 125%;
      }
  
      .yoyo-tooltip.fade-in {
        opacity: 1;
        visibility: visible;
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

  element.style.position = 'relative';
  element.appendChild(tooltip);

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
