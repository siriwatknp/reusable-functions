import every from 'lodash/every';

const checkZero = (...args) => (
  every(args, value => value === 0)
);

export default (past, present = Date.now()) => {
  const pastDate = new Date(past);
  const presentDate = new Date(present);
  const range = presentDate.getTime() - pastDate.getTime();

  const seconds = Math.floor(range / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (checkZero(minutes, hours, days, months, years)) {
    return `${seconds} วินาทีที่แล้ว`;
  }
  if (checkZero(hours, days, months, years)) {
    return `${minutes} นาทีที่แล้ว`;
  }
  if (checkZero(days, months, years)) {
    return `${hours} ชม.ที่แล้ว`;
  }
  if (checkZero(months, years)) {
    return `${days} วันที่แล้ว`;
  }
  if (checkZero(years)) {
    return `${months} เดือนที่แล้ว`;
  }
  return `${years} ปีที่แล้ว`;
};
