export function startJob({signal, delayMs = 150000} = {}) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(signal.reason);
    const abort = () => { clearTimeout(timer); reject(signal.reason); };
    const timer = setTimeout(() => { signal?.removeEventListener('abort', abort); resolve('completed'); }, delayMs);
    signal?.addEventListener('cancel', abort, {once: true});
  });
}
