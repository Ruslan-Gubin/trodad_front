
const formattedTime = ( options: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat('ru', options)
}

const getHourMin = (time: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    hour: '2-digit'
  }
  return formattedTime(options).format(new Date(time).getTime())
}

const getDayMount = (time: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit'
  }
  return formattedTime(options).format(new Date(time).getTime())
}

const getDayMonthYear = (time: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return formattedTime(options).format(new Date(time).getTime())
}

const getHourMinDayMonthYear = (time: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }
  return formattedTime(options).format(new Date(time).getTime())
}

const getInputDateFromParams = (value?: Date): string => {
  if (!value) return "";

  const year = value.getFullYear();
  const month = (value.getMonth() + 1).toString().padStart(2, "0");
  const day = value.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const TimeServices = {
  getInputDateFromParams,
  getHourMin,
  getDayMonthYear,
  getHourMinDayMonthYear,
  getDayMount,
}