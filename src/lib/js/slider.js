export function initSlider(slider = document.querySelector("#slider"), params = {}) {
  let len  = params.len || 0;
  let last_len = params.len || 0;
  let step = params.step ?? 30;
  let duration = params.duration ?? 200;

  /*************************************/

  let group;
  let mouse = false;
  let count = 0;
  let slides = slider.children;
  let max_len = 0;
  let can_move = true;
  let last_force = 0
  let previous_touch;

  /*************************************/

  new MutationObserver(e => {
    count = 0
    max_len = 0

    for (const slide of slides) {
      max_len = count * step;
      setupSlide(slide)
      count++;
    }

    

    // count = slides.length - 1
    // max_len = count * step

    // for (const elem of slides) {
    //   if (!elem.dataset.index) {
    //     setupSlide(elem)
    //   }
    // }

    setCenter(null)
  })
  .observe(slider, {childList: true})


  if (localStorage.len) {
    len = +localStorage.len
    last_len = len
  }

  /*************************************/

  slider.style = `--time: ${duration}ms`;

  for (const slide of slides) {
    max_len = count * step;
    setupSlide(slide)
    count++;
  }

  /*************************************/

  function setupSlide(slide) {
    slide.dataset.index = max_len;
    slide.dataset.angle = count % 2 ? -2 : 2
    slide.style.transform = `translate3d(0,1000px,0)`;
    slide.style.filter = "opacity(0)";
  }

  function throttle(func, timeout = 50) {
    let last = 0;

    return function(...args) {
      const now = Date.now();
      if (now - last > timeout) func(...args) 
      last = now;
    }
  }

  function getPair(elem) {
    let active = elem || document.querySelector(`[data-index="${len}"]`);
    let next   = active?.nextElementSibling;
    let prev1  = active?.previousElementSibling;
    let prev2  = prev1?.previousElementSibling;
    let prev3  = prev2?.previousElementSibling;

    return [prev3, prev2, prev1, active, next];
  }

  function setCenter(force, anim = true) {
    mouse = false;
    let offset = len % step;

    if (offset > step / 2) {
      len = len + (step - offset);
    } else {
      len = len - offset;
    }

    if (Math.abs(force) > 5) {
      len = force < 0 ? len + step : len - step
    }

    len = len <= max_len ? len : max_len;
    len = len >= 0 ? len : 0;

    if (len > last_len + step) {
      len = last_len + step;
    }

    if (len < last_len - step) {
      len = last_len - step;
    }

    len = Math.round(len)
    last_len = len

    // document.querySelector(".active")?.classList.remove("active");
    let active = document.querySelector(`[data-index="${len}"]`);
    // active?.classList.add("active");
    group = getPair(active);

    for (const elem of slider.querySelectorAll(".group") || []) {
      elem?.classList.remove("group");
    }

    for (const elem of group) {
      elem?.classList.add("group");
    }
    
    if (force == null || (!anim || !duration)) {
      move({ movementY: 0 }, true);
      return
    }
    // for (const elem of group) {
    //   elem.classList.add("fff")
    // }
    slider?.classList.add("trans");
    move({ movementY: 0 }, true);
    can_move = false;
    setTimeout(
      () => {
        slider.classList?.remove("trans");
        // for (const elem of group) {
        //   elem.classList.remove("fff")
        // }
        can_move = true;
      },
      duration
    );

    params?.onchange(len)
  }

  function round(num, fix = 10) {
    return Math.round(num * fix) / fix
  }

  function move(e, once) {
    if (mouse || once) {
      let divisor = 40

      last_force = e.movementY
      
      len -= e.movementY / (innerHeight / (len < 0 || len > max_len ? divisor / 8 : divisor));

      for (const slide of group) {
        if (!slide) continue;
        let loc_pos = round(len - slide.dataset.index)
        let angle = +slide.dataset.angle;
        let pos;
        let scl;
        let rot;
        let opc;

        if (loc_pos > 0) {
          pos = -loc_pos * 1.3;
          scl = -loc_pos * 2
          rot = loc_pos * angle / 40
          opc = 1 - round(loc_pos / step) / 3
        } else {
          pos = -loc_pos * 20;
          scl = 1;
          rot = 0;
          opc = 1 - -loc_pos / 30;
        }

        slide.style.transform = `perspective(500px)
        translate3d(0, ${pos / 6}vh, ${scl / 7}vh)
        rotateZ(${rot}deg)`;

        slide.style.filter = `opacity(${opc})`;
      }
    }
  }

  /*************************************/

  slider.addEventListener("touchstart", () => {
    if (can_move) mouse = true;
  });

  slider.addEventListener("touchend", () => {
    previous_touch = null;
    setCenter(last_force);
  });

  /*************************************/

  slider.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.touches[0];

    if (previous_touch) {
      move({ movementY: touch.pageY - previous_touch.pageY });
    }

    previous_touch = touch;
  });

  // if (innerWidth > 640) {
    slider.addEventListener("wheel", throttle((e) => {
      // console.log(e);
      if (can_move) setCenter(e.deltaY > 0 ? -6 : 6);
    }))
  // }

  /*************************************/

  setCenter(null, false)

  return {
    len:   ( num  ) => num ? len = num : len,
    count: (      ) => count,
    next:  ( anim ) => setCenter(-6, anim),
    prev:  ( anim ) => setCenter(6,  anim),
  }
}