import { healthRate } from '../character';

test.each([
  [55, 'healthy'],
  [25, 'wounded'],
  [5, 'critical']
])(
  ('Health %i has result %s'),
  (health, rate) => {
    const result = healthRate({name: 'Маг', health});
    expect(result).toBe(rate);
  }
)