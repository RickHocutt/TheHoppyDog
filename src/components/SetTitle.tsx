import { useEffect } from 'react';

interface SetTitleProps {
  title?: string;
}

export default function SetTitle({ title }: SetTitleProps) {
  useEffect(() => {
    const base = 'The Hoppy Dog LLC';
    document.title = title ? `${base} | ${title}` : base;
  }, [title]);

  return null;
}
