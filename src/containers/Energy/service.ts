import { Observable, merge, Subject } from "rxjs";
import {
  createLineData,
  createliquidData,
  createMirrorData,
  createBasicData,
  createRoseData
} from "./mock";

interface HelloReq {
  board: string;
  chart: string;
  index: string;
  payload: number;
}
// mock属性为一个生产随机数据的函数 () => 0, 1, {a: 1}
export const sources = {
  hello: {
    type: {
      board: "energy",
      chart: "hello",
      index: "0"
    },
    mock: (() => {
      return 1;
    })()
  },

  liquid: {
    type: {
      board: "energy",
      chart: "liquid",
      index: "0"
    },
    mock: createliquidData()
  },
  mirror: {
    type: {
      board: "energy",
      chart: "mirror",
      index: "0"
    },
    mock: createMirrorData()
  },
  line: {
    type: {
      board: "energy",
      chart: "line",
      index: "0"
    },
    mock: createLineData()
  },
  basiccolumn: {
    type: {
      board: "energy",
      chart: "basiccolumn",
      index: "0"
    },
    mock: createBasicData()
  },
  rose: {
    type: {
      board: "energy",
      chart: "rose",
      index: "0"
    },
    mock: createRoseData()
  }
};

export function createSource(time): Observable<unknown>[] {
  return Object.keys(sources).map(key => {
    const source = sources[key];

    return Observable.create(observer => {
      const req = {
        ...source.type,
        payload: source.mock
      };
      observer.next(req);
      setInterval(() => {
        req.payload = source.mock;
        observer.next(req);
      }, time);
    });
  });
}

const subject = new Subject();

export function emitData(type: string, data: unknown): void {
  subject.next({
    ...sources[type].type,
    payload: data
  });
}

export const source$ = merge(subject, ...createSource(5000));
