import type { Directive } from "vue";


const SLIDE_DISTANCE = 150;
const SLIDE_DURATION = 1000;
const animationMap = new WeakMap();

/**
 * directive: slide-in
 * function: 用于元素第一从视口下放进入视口时的向上滑动动画效果
 */
const ob = new IntersectionObserver((entries) => {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      const animation = animationMap.get(entry.target);
      if (animation) {
        animation.play();
        ob.unobserve(entry.target);
      }
    }
  }
});

const isBelowViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return rect.top - SLIDE_DISTANCE > window.innerHeight;
};

const slideIn: Directive = {
  mounted(el) {
    if (!isBelowViewport(el)) {
      return;
    }
    console.log('el', el);
    const animation = el.animate([
      { transform: `translateY(${SLIDE_DISTANCE}px)`, opacity: 0.5 },
      { transform: 'translateY(0)', opacity: 1 },
    ],
    {
      duration: SLIDE_DURATION,
      easing: 'ease-in-out',
      fill: 'forwards',
    });
    animation.pause();
    ob.observe(el);
    animationMap.set(el, animation);
  }
}
export default slideIn
