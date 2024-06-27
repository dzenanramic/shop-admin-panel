export function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name: string) {
  const isEmail = name.includes('@');
  const onlyLettersRegex = /[a-z]/gi;

  if (isEmail) {
    const emailSplit = name.split('@');
    if (emailSplit[0].includes('.')) {
      const emailSplitDot = emailSplit[0].split('.');
      const firstLetter = emailSplitDot[0][0]?.toUpperCase() ?? 'N/';
      const secondLetter = emailSplitDot[1][0]?.toUpperCase() ?? 'A';
      return {
        sx: {
          bgcolor: stringToColor(name),
          color: 'white',
          width: '40px',
          height: '40px',
          fontSize: '1rem',
        },
        children: `
      ${firstLetter}
      ${secondLetter}`,
      };
    }

    const formattedEmail = emailSplit[0].match(onlyLettersRegex) ?? [];
    const firstLetter = formattedEmail[0]?.toUpperCase() ?? 'N/';
    const secondLetter = formattedEmail[1]?.toUpperCase() ?? 'A';
    return {
      sx: {
        bgcolor: stringToColor(name),
        color: 'white',
        width: '40px',
        height: '40px',
        fontSize: '1rem',
      },
      children: `
      ${firstLetter}
      ${secondLetter}`,
    };
  }
  const nameSplit = name.split(' ');
  if (nameSplit.length >= 2) {
    const firstLetter = nameSplit[0][0]?.toUpperCase() ?? '';
    const secondLetter = nameSplit[1][0]?.toUpperCase() ?? '';
    return {
      sx: {
        bgcolor: stringToColor(name),
        color: 'white',
        width: '40px',
        height: '40px',
        fontSize: '1rem',
      },
      children: `
    ${firstLetter}
    ${secondLetter}`,
    };
  }

  const formattedName = name.match(onlyLettersRegex) ?? [];
  const firstLetter = formattedName[0]?.toUpperCase() ?? 'N/';
  const secondLetter = formattedName[1]?.toUpperCase() ?? 'A';
  return {
    sx: {
      bgcolor: stringToColor(name),
      color: 'white',
      width: '40px',
      height: '40px',
      fontSize: '1rem',
    },
    children: `${firstLetter}${secondLetter}`,
  };
}
