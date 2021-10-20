// @@@SNIPSTART nodejs-hello-client
import { Connection, WorkflowClient } from '@temporalio/client';
import { example, incrementSignal } from './workflows';

async function run() {
  // Connect to localhost with default ConnectionOptions,
  // pass options to the Connection constructor to configure TLS and other settings.
  const connection = new Connection();
  // Workflows will be started in the "default" namespace unless specified otherwise
  // via options passed the WorkflowClient constructor.
  const client = new WorkflowClient(connection.service);
  // Create a typed handle for the example Workflow.
  const workflowId = 'ef0bce6b-ba7a-4bf9-840e-9c43239438ea'
  const handle = client.createWorkflowHandle({ workflowId });
  await handle.signal(incrementSignal);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
// @@@SNIPEND
