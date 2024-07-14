import { duForEach } from '../index';

test('duForEach', () => {
  const array = [1, 2, 3];
  const mockCallback = jest.fn();

  array.duForEach(mockCallback);

  expect(mockCallback).toHaveBeenCalledTimes(3);
  expect(mockCallback).toHaveBeenNthCalledWith(1, 1, 0, array);
  expect(mockCallback).toHaveBeenNthCalledWith(2, 2, 1, array);
  expect(mockCallback).toHaveBeenNthCalledWith(3, 3, 2, array);
});