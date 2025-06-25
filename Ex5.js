function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function mostrarMensagem() {
  console.log("Executou!");
}

const debouncedMostrarMensagem = debounce(mostrarMensagem, 1000);

debouncedMostrarMensagem();
debouncedMostrarMensagem();
debouncedMostrarMensagem();
