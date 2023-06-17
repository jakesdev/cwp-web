import { faker } from '@faker-js/faker';

export const STAT_CARD = [
  {
    title: 'Revenue',
    iconUrl: 'https://img.icons8.com/color/96/null/banknotes.png',
    stat: `$${faker.datatype.number({ min: 1000000 })}`,
    percent: `${faker.datatype.number(100)}%`,
    isGrowth: faker.datatype.boolean()
  },
  {
    title: 'User',
    iconUrl: 'https://img.icons8.com/color/96/null/circled-user-male-skin-type-7--v1.png  ',
    stat: `${faker.datatype.number(40000)}`,
    percent: `${faker.datatype.number(100)}%`,
    isGrowth: faker.datatype.boolean()
  },
  {
    title: 'Visitor',
    iconUrl: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-visitor-internet-marketing-service-flaticons-flat-flat-icons.png',
    stat: `${faker.datatype.number(60000)}`,
    percent: `${faker.datatype.number(100)}%`,
    isGrowth: faker.datatype.boolean()
  },
  {
    title: 'Reported',
    iconUrl: 'https://img.icons8.com/external-filled-line-andi-nur-abdillah/64/null/external-Warning-cyber-security-(filled-line)-filled-line-andi-nur-abdillah.png',
    stat: `${faker.datatype.number(2000)}`,
    percent: `${faker.datatype.number(100)}%`,
    isGrowth: faker.datatype.boolean()
  }
];
