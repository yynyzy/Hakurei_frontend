import type { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
    parentNode: any;
}
const drag: Directive = {
  beforeMount(el: ElType, binding: DirectiveBinding) {
        const useDirective = binding.value;
        let disX = 0;
        let disY = 0;
        let canMove = false;
        el.style.position = "absolute";
        el.onmousedown =  (e) => {
            if(!useDirective) return;
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
