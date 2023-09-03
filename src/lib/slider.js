export function initSlider(slider) {
  let max_index = 0;
  let step = 30;
  let turn = true;
  let pos = 0;
  let mouse = false;
  let can_move = true;
  let transition_time = 200;

  /*************************************/
  
  let slides = slider.children;
  let slides_count = 0
  
  
  slider.style = `--time: ${transition_time}ms`;
  slides[0].classList.add("active");


  for (const slide of slides) {
    max_index = slides_count * step;
    slide.dataset.index = slides_count * step;
    slide.dataset.angle = (turn ? "-" : "") + Math.random() * 3;
    slide.style.transform = `translateY(1000px)`;
    slide.style.opacity = "0";
    turn = !turn;
    slides_count++
  }

  /*************************************/

  function getPair(elem) {
    // console.log(elem);
    let active = elem || document.querySelector(".active");
    let next = active?.nextSibling;
    let prev1 = active?.previousSibling;
    let prev2 = prev1?.previousSibling;

    return [prev2, prev1, active, next];
  }

  /*************************************/

  let pair = getPair();

  /*************************************/

  function fixed_slide() {
    mouse = false;
    let offset = pos % step;

    // console.log(pos, max_index, offset, step / 2);

    if (offset > step / 2) {
      pos = pos + (step - offset);
    } else {
      pos = pos - offset;
    }

    pos = pos <= max_index ? pos : max_index;
    pos = pos >= 0 ? pos : 0;

    document.querySelector(".active").classList.remove("active");
    let active = document.querySelector(`[data-index="${pos}"]`);
    active.classList.add("active");
    pair = getPair(active);

    slider.classList.add("trans");
    move({ movementY: -1 }, true);
    can_move = false;
    setTimeout(() => {
      // console.log("ok");
      slider.classList.remove("trans");
      can_move = true;
    }, transition_time);
  }

  /*************************************/

  function move(e, once) {
    if (mouse || once) {
      pos -= e.movementY / (innerHeight / 50);
      pos = pos > 0 ? pos : 0;

      for (const slide of pair) {
        if (!slide) continue;
        let loc_pos = pos - slide.dataset.index;
        let angle = +slide.dataset.angle;

        if (loc_pos > 0) {
          slide.style.transform = `translateY(${-(loc_pos * 1.1)}px) scale(${
            1 - (loc_pos / 100) * 0.3
          }) rotate(${(loc_pos * angle) / 40}deg)`;
          slide.style.opacity = 1 - (loc_pos / 100) * 1.3;
        } else {
          slide.style.transform = `translateY(${-loc_pos * 20}px)`;
          slide.style.opacity = 1 - -loc_pos / 30;
        }

        // if (loc_pos > 0) {
        //   // console.log(loc_pos);
        //   slide.style.transform = `translateY(${-(loc_pos * 1.1)}px) scale(${1 - (loc_pos / 100) * 0.3}) rotate(${(loc_pos * angle) / 40}deg)`;
        //   slide.style.opacity = (1 - (loc_pos / 90))
        // }
        // else {
        //   // console.log(1 - (-pos / 100));
        //   slide.style.transform = `translateY(${-loc_pos * 20}px)`;
        //   slide.style.opacity = (1 - (-loc_pos / 30))
        // }
      }
    }
  }

  /*************************************/

  slider.addEventListener("mousedown", () => {
    if (can_move) mouse = true;
  });

  slider.addEventListener("touchstart", () => {
    if (can_move) mouse = true;
  });
  slider.addEventListener("mouseup", () => {
    previousTouch = null;
    fixed_slide();
  });

  slider.addEventListener("touchend", () => {
    previousTouch = null;
    fixed_slide();
  });

  /*************************************/

  let previousTouch;

  slider.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.touches[0];

    if (previousTouch) {
      move({ movementY: touch.pageY - previousTouch.pageY });
    }

    previousTouch = touch;
  });

  slider.addEventListener("mousemove", move);

  /*************************************/

  move({ movementY: -1 }, true);
}