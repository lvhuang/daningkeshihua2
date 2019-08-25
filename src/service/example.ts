import { request } from "./request";

export function checkInSync(
  latitude: number,
  longitude: number,
  imageStream: string
) {
  return request.post<any, string>("1041", {
    signType: 1001,
    subjectId: null,
    longitude: longitude,
    latitude: latitude,
    imageStream
  });
}

interface IGeo {
  longitude: string;
  latitude: string;
}
const vendorLocationSchema = {
  type: "object",
  properties: {
    latitude: {
      type: ["string", "number"]
    },
    longitude: {
      type: ["string", "number"]
    },
    name: {
      type: "string"
    }
  }
};
