/* eslint-disable no-param-reassign, no-mixed-operators, no-plusplus, no-return-assign, no-cond-assign */
import { curry } from 'lodash';
import getSpinCount from './getSpinCount';


//  сохранять результат выполнения функции сглаживания и в каждой итерации определять dy


const raf = window.requestAnimationFrame || window.msRequestAnimationFrame || window.webkitRequestAnimationFrame;


function ease(t, b, c, d) {
  return (t /= d / 2) < 1
    ? c / 2 * t * t + b
    : -c / 2 * ((--t) * (t - 2) - 1) + b;
}


const createRafHandler = curry((component, data) => {
  const { offset, list, currentIndex, initialHeight, props } = component.state;
  const { target, height } = props;
  const { previousValue, startTime, spinCount } = data;
  const currentTime = Date.now();

  if (currentIndex !== target || offset !== initialHeight) {
    const newValue = ease(currentTime - startTime, 0, spinCount, 1000);
    const newOffset = offset + (Math.ceil(newValue) - previousValue);
    const slotChanged = newOffset >= initialHeight + height;

    console.log(target, currentIndex, list, spinCount);

    component.setState(
      {
        offset: slotChanged ? initialHeight : newOffset,
        currentIndex: slotChanged ? list[currentIndex].previous.index : currentIndex,
      },
      () => {
        component.rafId = raf(createRafHandler(component, { ...data, previousValue: newValue }));
      },
    );
  }

  //  Зедесь должна быть остановка анимации, так же нужно вывести информацию об анимациии в состояние
}, 3);


export default function startAnimationHandling(component) {
  const { currentIndex, list, props: { target } } = component.state;
  const data = { startTime: Date.now(), previousValue: 0, spinCount: getSpinCount(list[currentIndex], 'previous', target) * 100 };
  component.rafId = raf(createRafHandler(component, data));
}
