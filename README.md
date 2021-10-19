# Temporal TypeScript SDK Alpha - Tutorial plan

- Temporal prerequisites:
  - clone https://github.com/temporalio/docker-compose and `docker-compose up`
  - in future: https://github.com/DataDog/temporalite
- Start a project with `npx @temporalio/create`
  - Walk thru project structure
  - Run your first workflow
  - See it stall in Temporal Web UI: http://localhost:8088
  - Run first Worker
- Activities
  - Activity Retries and Timeouts
    - make Activity always fail
    - show that it continues when the Worker goes down
  - install axios and ping an API: http://quotes.rest/
- Workflow APIs
  - `sleep`
  - `condition`
  - Signals and Queries