# Storage
All public static files for TRIPMATA.
Service | Folder | Documentation
--------|--------|--------------
AdminArea | ```admin/``` | [https://github.com/tripmata/Storage/blob/master/admin/readme.md]
ClientArea | ```client/``` | [https://github.com/tripmata/Storage/blob/master/client/readme.md]
FrontDeskArea | ```frontdesk/``` | [https://github.com/tripmata/Storage/blob/master/frontdesk/readme.md]
Logo | ```logo/``` | [https://github.com/tripmata/Storage/blob/master/logo/readme.md]
Files | ```files/``` | [https://github.com/tripmata/Storage/blob/master/files/readme.md]


## Documentation
This public storage public drive provides a simple API to push and fetch files using the ```GET``` or ```POST``` HTTP request methods. We would demonstrate file upload in the next heading below.

### File upload
There are few things to capture, namely;
1. The storage address
2. The action you are requesting for
3. The folder to work with. (see list of available folders above)

#### Example
```http
POST http://example.com/upload/<folder eg. files>
..... file body
```

It would return a JSON formatted response with the newly generated file name.

```json
{
    "status" : "success",
    "data" : "shssteue683637399273.png"
}
```