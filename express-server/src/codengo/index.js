import faker from 'faker';
import dateFns from 'date-fns';

const createSession = ({ minDate, maxDate }) => {
  const capacity = faker.random.number({ min: 30, max: 70 });

  return {
    id: faker.random.number({ min: 1, max: 500 }),
    placeId: faker.random.number({ min: 1, max: 50 }),
    startAt: faker.date.between(minDate, maxDate),
    capacity,
    remainingCapacity: faker.random.number(capacity),
  };
};

export const getSessionsForDay = (day = dateFns.startOfToday()) => {
  // Between 10 and 20
  const number = Math.random() * 10 + 10;
  const sessions = [];

  const minDate = dateFns.startOfDay(day);
  const maxDate = dateFns.endOfDay(day);

  for (let i = 0; i < number; i++) {
    sessions.push(createSession({ minDate, maxDate }));
  }

  return sessions
};
