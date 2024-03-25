export const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };

  const [index, setIndex] = useState(0);

  function handleClick(event) {
    setIndex(index + 1);
  }