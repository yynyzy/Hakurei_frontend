// import type { Directive } from "vue";

// const drag: Directive = {
//   beforeMount (el) {
//     let disX = 0;
//     let disY = 0;
//     let canMove = false;

//     el.addEventListener('mousedown', (e) => {
//       canMove = true;
//       disX = e.clientX - el.offsetLeft; // 获取当前鼠标在客户端的水平坐标减去当前元素相对于父节点的偏移0像素值
//       disY = e.clientY - el.offsetTop;
//     });
//     document.addEventListener('mousemove', (e) => {
//       if (canMove) {
//         el.style.left = e.clientX - disX + 'px';
//         el.style.top = e.clientY - disY + 'px';
//       }
//     });
//     document.addEventListener('mouseup', () => {
//       canMove = false;
//       document.onmousemove = null;
//       document.onmouseup = null;
//     });
//   },
// }

// export default drag;

import type { Directive } from "vue";
interface ElType extends HTMLElement {
    parentNode: any;
}
const drag: Directive = {
  beforeMount(el: ElType) {
        let disX = 0;
        let disY = 0;
        let canMove = false;
        el.style.position = "absolute";
        el.onmousedown =  (e) => {
            canMove = true;
            disX = e.clientX - el.offsetLeft;
            disY = e.clientY - el.offsetTop;
            document.onmousemove = (e) => {
                let x = e.clientX - disX;
                let y = e.clientY - disY;
                let maxX = parseInt(window.getComputedStyle(el.parentNode).width) - parseInt(window.getComputedStyle(el).width);
                let maxY = parseInt(window.getComputedStyle(el.parentNode).height) - parseInt(window.getComputedStyle(el).height);
                if (x < 0) {
                  x = 0;
                } else if (x > maxX) {
                  x = maxX;
                }
                if (y < 0) {
                  y = 0;
                } else if (y > maxY) {
                  y = maxY;
                }
                el.style.left = x + "px";
                el.style.top = y + "px";
            };
            document.onmouseup = () => {
              canMove = false;
              document.onmousemove = null;
              document.onmouseup = null;
            };
        };
    }
};
export default drag;
