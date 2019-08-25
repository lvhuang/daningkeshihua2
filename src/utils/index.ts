export const trace = (tag: string) => {
  return (d: any) => {
    console.log(
      `%c DEBUG TRACE TAG, ${tag}: `,
      "color: #fff; background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.5, #f2f), color-stop(1, #22f));color:#fff;-webkit-background-clip: text;font-size:1em;"
    );
    console.log(d);
    console.groupCollapsed();
    console.trace("stack");
    console.groupEnd();
    return d;
  };
};

export const delay = (time: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export function formatdate(data: number) {
  if (!data) {
    return "";
  }
  var d = new Date(data * 1);
  var year = d.getFullYear();
  var months = d.getMonth() + 1;
  var month = months < 10 ? "0" + months : "" + months;
  var day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
  var hh = d.getHours() < 10 ? "0" + d.getHours() : "" + d.getHours();
  var mm = d.getMinutes() < 10 ? "0" + d.getMinutes() : "" + d.getMinutes();
  let ss = d.getSeconds() < 10 ? "0" + d.getSeconds() : "" + d.getSeconds();
  return year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + ss;
}

export const uniqueId = (() => {
  let seed = 0;
  return (start: string) => {
    return `${start}_${seed++}`;
  };
})();
