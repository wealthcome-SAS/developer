import Heading from "@theme/Heading";



<Heading
  as={"h1"}
  className={"openapi__heading"}
  children={"Introduction"}
>
</Heading>
The wealthcome Authentication layer closely follow the [OAuth2.0 specification](https://oauth.net/2/)


## Grant
To access a wealthcome user's resources, an explicit grant must be made for your application

For now only the following Grant are supported:

- [Authorization Code Grant](https://oauth.net/2/grant-types/authorization-code/)
  - To allow access to a company/group resources
  - To allow acesss to a manager resources
  - To allow access to a B2C users (to available now)
- [Client Credentials Grant](https://oauth.net/2/grant-types/client-credentials/)
  - To register an new client for a given application.

 
<Heading
  as={"h2"}
  className={"openapi__heading"}
  children={"Access"}
>
</Heading>