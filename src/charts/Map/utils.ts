export function getPoint(str): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const myGeo = new window.BMap.Geocoder();
    myGeo.getPoint(str, point => {
      if (point) {
        resolve(point);
      } else {
        reject(new Error("未获取经纬度"));
      }
    });
  });
}

export function addPointerListener(map, callback): void {
  map.addEventListener("click", e => {
    const pt = e.point;
    callback(pt);
  });
}

export function getDistrict(pt): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const geoc = new window.BMap.Geocoder();
    geoc.getLocation(pt, rs => {
      const addComp = rs.addressComponents;
      resolve(addComp);
    });
  });
}
