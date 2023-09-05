<script>
  export let name, size, stroke, color;

  // let div = <div></div>

  size ||= 24;
  stroke ||= 2;
  color ||= "#eee";

  const path = (d) => {
    return `<path d="${d}" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>`
  };

  const icons = {
    home:
      path`M11.25 27.5001V15.0001H18.75V27.5001M3.75 11.25L15 2.5L26.25 11.25V25C26.25 26.3617 25.1117 27.5 23.75 27.5H6.25C4.88833 27.5 3.75 26.3617 3.75 25V11.25Z`,

    search:
      path`M26.2498 26.25L20.8123 20.8125M13.7498 23.75C26.6468 23.75 26.6468 3.75 13.7498 3.75C0.852916 3.75 0.852916 23.75 13.7498 23.75Z`,

    add:
      path`M15 10.0001V20.0001M10 15.0001H20M27.5 15.0001C27.5 -1.12111 2.5 -1.12111 2.5 15.0001C2.5 31.1212 27.5 31.1212 27.5 15.0001Z`,

    notify:
      path`M17.1625 26.25C16.219 27.8766 13.781 27.8766 12.8375 26.25M15 2.5C26.08 2.5 19.6283 16.8355 26.25 21.25H3.75C10.3717 16.8355 3.91997 2.5 15 2.5Z`,

    user:
      path`M25 26.2499C25 24.0884 25.2037 21.8826 23.5356 20.2144C20.6275 17.3063 9.71816 16.9607 6.4645 20.2144C4.79635 21.8826 5.00003 24.0884 5.00003 26.2499M15 13.75C21.4485 13.75 21.4485 3.75 15 3.75C8.55153 3.75 8.55153 13.75 15 13.75Z`,

    menu:
      `<circle cx="4"  cy="15" r="${stroke}" fill="${color}"/>
       <circle cx="15" cy="15" r="${stroke}" fill="${color}"/>
       <circle cx="26" cy="15" r="${stroke}" fill="${color}"/>`,
    like: 
      path`M14.9997 8.42719C10.7901 1.53596 4 6.42217 4 11.4414C4 16.7678 11.701 21.6618 14.9997 25C18.5933 21.3633 26 17.345 26 11.4414C26 6.34056 19.2099 1.53625 14.9997 8.42719Z`
  };



  let icon = icons[name]

  if (!icon) {
    console.error(`Icon '${name}' not found`)
  }
</script>



<svg
  width={size}
  height={size}
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {@html icon}
</svg>
