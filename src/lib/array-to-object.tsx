/* eslint-disable @typescript-eslint/no-explicit-any */
const format = (_data: any) => {
  const data: any = {};
  Object.keys(_data).forEach((key) => {
    if (typeof _data[key] === 'object') {
      data[key] = _data[key][0];
    } else {
      data[key] = _data[key];
    }
  });
  return data;
};

const formatData = (_data: Array<any>) => {
  const data: any[] = [];
  _data.forEach((item) => {
    data.push(format(item));
  });
  return data;
};

export default formatData;
