import classNames from 'classnames';

export const highlightText = (text: string, highlightText?: string) => {
  if (!highlightText) {
    return text;
  }
  return text.split('').map((char, index) =>
    highlightText.includes(char) ? (
      <span key={index} className={classNames('text-l-bold', 'main500')}>
        {char}
      </span>
    ) : (
      char
    ),
  );
};
