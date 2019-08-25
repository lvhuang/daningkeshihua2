import { randomUniform } from "d3";

export function createLineData() {
  // return new Array(12).fill(null).map((_, index) => {
  //   return {
  //     time: new Date(),
  //     city: index % 2 === 0 ? "上海" : "北京",
  //     temperature: Math.round(randomUniform(0, 40)())
  //   };
  // });
  return [
    {
      time: "Jan",
      city: "Newyork",
      temperature: 7
    },
    {
      time: "Jan",
      city: "London",
      temperature: 3.9
    },
    {
      time: "Jan",
      city: "Tokyo",
      temperature: 4.9
    },
    {
      time: "Feb",
      city: "Tokyo",
      temperature: 6.9
    },
    {
      time: "Feb",
      city: "London",
      temperature: 4.2
    },
    {
      time: "Feb",
      city: "Newyork",
      temperature: 8.2
    },
    {
      time: "Mar",
      city: "Newyork",
      temperature: 9.5
    },
    {
      time: "Mar",
      city: "Tokyo",
      temperature: 8.3
    },
    {
      time: "Mar",
      city: "London",
      temperature: 5.7
    },
    {
      time: "Apr",
      city: "Tokyo",
      temperature: 14.5
    },
    {
      time: "Apr",
      city: "London",
      temperature: 8.5
    },
    {
      time: "Apr",
      city: "Newyork",
      temperature: 10.5
    },
    {
      time: "May",
      city: "Tokyo",
      temperature: 19.4
    },
    {
      time: "May",
      city: "London",
      temperature: 11.9
    },
    {
      time: "May",
      city: "Newyork",
      temperature: 14.9
    },
    {
      time: "Jun",
      city: "Newyork",
      temperature: 21.5
    },
    {
      time: "Jun",
      city: "London",
      temperature: 15.2
    },
    {
      time: "Jun",
      city: "Tokyo",
      temperature: 25.2
    },
    {
      time: "Jul",
      city: "Newyork",
      temperature: 25.2
    },
    {
      time: "Jul",
      city: "Tokyo",
      temperature: 28
    },
    {
      time: "Jul",
      city: "London",
      temperature: 17
    },
    {
      time: "Aug",
      city: "Newyork",
      temperature: 26.5
    },
    {
      time: "Aug",
      city: "London",
      temperature: 16.6
    },
    {
      time: "Aug",
      city: "Tokyo",
      temperature: 29.6
    },
    {
      time: "Sep",
      city: "Tokyo",
      temperature: 23.3
    },
    {
      time: "Sep",
      city: "London",
      temperature: 14.2
    },
    {
      time: "Sep",
      city: "Newyork",
      temperature: 24.2
    },
    {
      time: "Oct",
      city: "Tokyo",
      temperature: 18.3
    },
    {
      time: "Oct",
      city: "Newyork",
      temperature: 10.3
    },
    {
      time: "Oct",
      city: "London",
      temperature: 11.3
    },
    {
      time: "Nov",
      city: "Tokyo",
      temperature: 13.9
    },
    {
      time: "Nov",
      city: "London",
      temperature: 5.9
    },
    {
      time: "Nov",
      city: "Newyork",
      temperature: 6.6
    },
    {
      time: "Dec",
      city: "Tokyo",
      temperature: 9.6
    },
    {
      time: "Dec",
      city: "Newyork",
      temperature: 4.8
    },
    {
      time: "Dec",
      city: "London",
      temperature: 3.8
    }
  ];
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
