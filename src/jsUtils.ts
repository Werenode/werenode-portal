import { ThemeProvider, createTheme, useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
export function difference<T>(...arrays: T[][]) {
  return arrays.reduce((a, b) => a.filter((c) => !b.includes(c)));
}

// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
export function sortBy<T>(array: T[], getter: (item: T) => unknown) {
  function compareBy(getter: (item: T) => unknown) {
    return (a: T, b: T) =>
      getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0;
  }

  const sortedArray = [...array];
  sortedArray.sort(compareBy(getter));
  return sortedArray;
}

export function toggleListItem<T>(list: T[], item: T) {
  const itemIndex = list.indexOf(item);
  if (itemIndex === -1) {
    return list.concat(item);
  } else {
    const newList = [...list];
    newList.splice(itemIndex, 1);
    return newList;
  }
}

export function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

export function isWidthDown(breakp, width) {
  switch (breakp) {
    case 'xs' : return (width == 'xs');
    case 'sm' : return (width == 'xs' || width == 'sm');
    case 'md' : return (width == 'md' || width == 'xs' || width == 'sm');
    default : return true
  }
}
