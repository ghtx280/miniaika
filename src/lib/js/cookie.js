export const cookie = {
  set(name, value, days = 365) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setDate(date.getDate() + days);
      expires = date.toUTCString();
    }
    if (typeof value == "object") value = JSON.stringify(value);
    else value += "";
    value = encodeURIComponent(value);
    document.cookie = `${name}=${value || ""}; expires=${expires}; path=/`;
  },
  get(name) {
    return decodeURIComponent(
      (document.cookie + ";").match(new RegExp(name + "=(.*?);"))?.[1]
    );
  },
  del(name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
};
