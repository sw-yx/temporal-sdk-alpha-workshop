import * as wf from '@temporalio/workflow';

export const incrementSignal = wf.defineSignal('increment');

export async function example(name: string): Promise<string> {
  let count = 0
  wf.setListener(incrementSignal, () => {
    console.log('signal received', count)
    count++;
  })
  await wf.condition(() => count === 3);
  return 'done'
}
