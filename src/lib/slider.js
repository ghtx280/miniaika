export async function initSlider(slider) {
  // console.log(JSON.stringify(slider.children));
  
  let max_index = 0;
  let step = 30;
  let turn = true;
  let len = 0;
  let mouse = false;
  let can_move = true;
  let transition_time = 200;

  /*************************************/

  let slides = slider.children;
  let slides_count = 0;



  slider.style = `--time: ${transition_time}ms`;
  slides[0].classList.add("active");

  for (const slide of slides) {
    max_index = slides_count * step;
    slide.dataset.index = slides_count * step;
    slide.dataset.angle = (turn ? "-" : "") + (Math.random() * 3).toFixed(2);

    slide.style.transform = `translate3d(0,1000px,0)`;
    slide.style.filter = "opacity(0)";

    // slide.style.transform = `translateY(1000px)`;
    // slide.style.opacity = 0;

    turn = !turn;
    slides_count++;
  }

  /*************************************/

  function getPair(elem) {
    // console.log(elem);
    let active = elem || document.querySelector(".active");
    let next   = active?.nextElementSibling;
    let prev1  = active?.previousElementSibling;
    let prev2  = prev1?.previousElementSibling;

    return [prev2, prev1, active, next];
  }

  /*************************************/

  let pair = getPair();


  /*************************************/

  let last_len = 0

  function fixed_slide(force) {
    // alert(force)
    mouse = false;
    let offset = len % step;

    // console.log(last_len, len);

    // console.log(len, max_index, offset, step / 2);

    if (offset > step / 2) {
      len = len + (step - offset);
    } else {
      len = len - offset;
    }

    if (Math.abs(force) > 5) {
      len = force < 0 ? len + step : len - step
    }

    len = len <= max_index ? len : max_index;
    len = len >= 0 ? len : 0;

    // console.log(len < last_len - step);

    if (len > last_len + step) {
      len = last_len + step;
    }

    if (len < last_len - step) {
      len = last_len - step;
    }

    
    // console.log(len, Math.abs(force));
    last_len = len

    document.querySelector(".active").classList.remove("active");
    let active = document.querySelector(`[data-index="${len}"]`);
    active.classList.add("active");
    pair = getPair(active);

    slider.classList.add("trans");
    move({ movementY: -1 }, true);
    can_move = false;
    setTimeout(
      () => {
        slider.classList.remove("trans");
        can_move = true;
      },
      transition_time
    );
  }

  /*************************************/

  let last_force = 0
  let max_force = 40
  

  function move(e, once) {
    if (mouse || once) {
      last_force = e.movementY
      
      // if (Math.abs(last_force) > max_force) return
      
      len -= e.movementY / (innerHeight / 40);
      len = len > 0 ? len : 0;

      for (const slide of pair) {
        if (!slide) continue;
        let loc_pos = len - slide.dataset.index;
        let angle = +slide.dataset.angle;
        let pos;
        let scl;
        let rot;
        let opc;

        if (loc_pos > 0) {
          pos = -loc_pos;
          scl = -loc_pos * 2
          rot = (loc_pos * angle) / 40
          opc = 1 - (loc_pos / 100) * 1.3;
        } else {
          pos = -loc_pos * 20;
          scl = 1;
          rot = 0;
          opc = 1 - -loc_pos / 30;
        }

        // slide.style.transform = 
        // `translate3d(0,${pos}px,0) scale3d(${scl},${scl},1) rotate(${rot}deg)`;
        // slide.style.filter = 
        // `opacity(${opc})`;

        slide.style.transform = `perspective(500px)
        translate3d(0, ${pos * 1.2}px, ${scl}px)
        rotateZ(${rot}deg)`;

        slide.style.filter = `opacity(${opc})`;

        // slide.style.transform = 
        // `translateY(${pos}px) scale(${scl}) rotate(${rot}deg)`;
        // slide.style.opacity = opc
      }
    }
  }

  /*************************************/

  // slider.addEventListener("mousedown", () => {
    
  //   if (can_move) mouse = true;
  // });

  slider.addEventListener("touchstart", () => {
    if (can_move) mouse = true;
  });
  // slider.addEventListener("mouseup", () => {
    
  //   previousTouch = null;
  //   fixed_slide();
  // });

  slider.addEventListener("touchend", () => {
    // console.log(last_force);
    previousTouch = null;
    fixed_slide(last_force);
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

  // slider.addEventListener("mousemove", move);

  slider.addEventListener("wheel", e => {
    console.log(e.deltaY > 0 ? -6 : 6);
    if (can_move) fixed_slide(e.deltaY > 0 ? -6 : 6);
  })

  /*************************************/

  move({ movementY: -1 }, true);

  return "ok"
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
