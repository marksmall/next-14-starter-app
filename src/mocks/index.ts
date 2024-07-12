/**
 * Function to setup MSW in either a NodeJS or Browser environment.
 */
export const setupMsw = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    void worker.start();
  }
};
