import { randomUniform } from "d3";

export function createLineYearData() {
  // return new Array(12).fill(null).map((_, index) => {
  //   return {
  //     time: new Date(),
  //     city: index % 2 === 0 ? "上海" : "北京",
  //     temperature: Math.round(randomUniform(0, 40)())
  //   };
  // });
  return [];
}
export function createliquidData() {
  return [
    {
      gender: "male",
      path:
        "M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z",
      value: 50
    },
    {
      gender: "middle",
      path:
        "M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z",
      value: 25
    }
  ];
}

export function createMirrorData() {
  return [
    {
      city: "石家庄",
      type: "水果",
      value: 14500
    },
    {
      city: "石家庄",
      type: "奶茶",
      value: 6500
    },
    {
      city: "石家庄",
      type: "餐饮",
      value: 2300
    },
    {
      city: "深圳",
      type: "茶叶",
      value: 9000
    },
    {
      city: "深圳",
      type: "牛奶",
      value: 7800
    },
    {
      city: "深圳",
      type: "土陶",
      value: 6000
    }
  ];
}
