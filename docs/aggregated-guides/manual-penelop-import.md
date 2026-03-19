---
sidebar_position: 1
title: Manual Penelop Import
---

# Manual Penelop Import

`manual_penelop.imports` lets a client upload a Penelop XML file through the existing Aggregated API import routes, then trigger the standard backend synchronization flow.

## Overview

The flow is:

1. Create an import task with `type = manual_penelop.imports`
2. Upload the XML to the returned presigned URL
3. Call `PATCH /aggregated/task/import/{importID}` with `status = INITIATED`
4. The Aggregated API consumer validates the XML, writes the file in the `connections` bucket, writes the Vault credentials, then publishes a manual synchronization trigger
5. The backend consumes the synchronization trigger and creates the synchronization
6. The Synchronizer Engine processes the `manual_penelop` synchronization

This feature does not introduce a new route. It extends the existing import task workflow.

## Create the import task

Use `POST /aggregated/task/import` with:

```json
{
  "type": "manual_penelop.imports",
  "options": {
    "sourceId": "a9ec2d91-87ec-4097-83f1-baf0822a4573",
    "establishmentName": "Cabinet Ithaque"
  }
}
```

### Required options

- `sourceId`: the target connection UUID
- `establishmentName`: the establishment name used by the Penelop pipeline

### Validation rules

- `sourceId` must point to an existing connection
- the target connection must use the `manual_penelop` connector
- `establishmentName` is normalized and must stay non-empty after normalization
- `establishmentName` has a maximum length of 120 characters

## Upload the XML

After the task creation, the API returns a presigned upload URL.

Upload the XML to:

- `tasks/imports/{taskId}`

Accepted content types for the route-level validation are:

- `application/xml`
- `text/xml`

The consumer also rejects:

- empty XML files
- XML files larger than 20 MB
- invalid XML documents
- XML documents that are not valid Penelop payloads

## Trigger the processing

Call:

```json
PATCH /aggregated/task/import/{importID}
{
  "status": "INITIATED"
}
```

At this stage, the API checks that the uploaded file exists before it publishes the import message.

## Runtime behavior

Once the import message is consumed:

1. the import task is moved to `PROCESSING`
2. the XML is read from `tasks/imports/{taskId}`
3. the XML is copied to `connections/manual_penelop/{connectionId}/inputs/{taskId}.xml`
4. the Vault credentials are updated at `credentials/data/manual_penelop/{connectionId}`
5. the backend synchronization trigger is published
6. the import task is moved to `FINISHED` or `FAILED`

The Aggregated API is responsible for:

- import task lifecycle
- upload validation
- writing the XML into the `connections` bucket
- writing the Penelop credentials into Vault

The backend remains responsible for:

- synchronization creation
- synchronization lifecycle
- connection state management

## Vault payload

The import consumer stores:

- `file`: the XML file name written to the connection input folder
- `establishment`: the normalized establishment name
- `username`: the connection identifier if available

`fileContent` is not stored in Vault.

## Error cases

The import task is marked as `FAILED` when:

- the import options are invalid
- the source connection does not exist
- the source connection is not a `manual_penelop` connection
- the uploaded file is missing or not XML
- the XML is empty, too large, malformed, or not a valid Penelop document
- the file copy, Vault write, or synchronization trigger fails

## Notes

- One import task handles one XML file
- The route contract stays unchanged for `PATCH`: only `status = INITIATED` is allowed
- The import message published by the API includes the `options` payload
