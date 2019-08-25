import * as d3 from "d3";

let BMap = null;

function update(map, points): void {
  const ctx = this.canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const data = points.map(point => {
    const { lng, lat } = point;

    return new BMap.Point(lng, lat);
  });

  const p = data.map(item => {
    return map.pointToPixel(item);
  });

  ctx.strokeStyle = "rgba(50, 50, 255, 0.7)";
  ctx.beginPath();
  d3
    .line()
    .x((item: any) => item.x)
    .y((item: any) => item.y)
    .curve(d3.curveCardinal)
    .context(ctx)(p);

  ctx.stroke();
  //   .forEach((item, index) => {
  //     if (!index) {
  //       ctx.moveTo(item.x, item.y);
  //     } else {
  //       ctx.lineTo(item.x, item.y);
  //     }
  //   });

  // ctx.stroke();
}

export class Route {
  constructor(map, points) {
    if (!BMap) BMap = window.BMap;
    return new BMap.CanvasLayer({
      update() {
        update.apply(this, [map, points]);
      }
    });
  }
}
