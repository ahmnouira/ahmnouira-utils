export async function wait(timeout: number = 1000): Promise<void> {
  return await new Promise((resolve) => setTimeout(resolve, timeout));
}

export const wait2s = () => wait(2000);
