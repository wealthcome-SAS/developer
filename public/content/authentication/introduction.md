# Introduction

The Wealthcome authentication layer closely follows the OAuth 2.0 specification.

## Grants

To access a Wealthcome user's resources, your application must receive an explicit grant.

Supported grants:

- **Authorization Code Grant**
  - Access to company/group resources
  - Access to a manager's resources
  - Access to B2C users (not available yet)

- **Client Credentials Grant**
  - Register a new client for a given application

## Authorization Code Grant

The Authorization Code Grant is used when your application needs to access user resources with explicit user consent.

### Use Cases
- Access to company/group resources
- Access to a manager's resources
- Access to B2C users (not available yet)

## Client Credentials Grant

The Client Credentials Grant is used for server-to-server authentication where no user interaction is required.

### Use Cases
- Register a new client for a given application
- Access to system-level resources