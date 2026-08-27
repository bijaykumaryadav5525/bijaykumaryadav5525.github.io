import { useEffect, useState } from "react";

export function useTypingEffect(words: string[]) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      setText(currentWord.substring(0, charIndex));

      let delay = isDeleting ? 60 : 120;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        delay = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }

      timeoutId = setTimeout(tick, delay);
    };

    timeoutId = setTimeout(tick, 120);
    return () => clearTimeout(timeoutId);
  }, [words]);

  return text;
}
