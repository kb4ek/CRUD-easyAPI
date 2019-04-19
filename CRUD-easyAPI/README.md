# API Document

## `/join`

### POST

**Request**

```json
{
  "id": "사용자 아이디(String)",
  "password": "사용자 비밀번호(String)",
  "name": "사용자 이름(String)",
  "age": "사용자 나이(number)"
}
```

**Response**

> 성공했을 경우 status(200)

```json
{
  "result ": {
    "SUCCESS": true,
    "message": "회원가입에 성공했습니다."
  }
}
```

> 아이디가 중복되었을 경우 status(412)

```json
{
  "result": {
    "SUCCESS": false,
    "message": "중복된 아이디입니다."
  }
}
```

> 서버에서 오류가 발생할 경우 status(500)

```json
{
  "result": {
    "SUCCESS": false,
    "message": "error message"
  }
}
```

## `/login`

### POST

**Request**

```json
{
  "id": "사용자 아이디(String)",
  "password": "사용자 비밀번호(String)"
}
```

**Response**

> 성공했을 경우 status(200)

```json
{
  "result": {
    "SUCCESS": true,
    "message": "로그인에 성공하셨습니다.",
    "token": "토큰 발급",
    "user": "사용자 정보"
  }
}
```

> 아이디 혹은 비밀번호가 일치하지 않을 경우 status(404)

```json
{
  "result": {
    "SUCCESS": false,
    "message": "로그인에 실패하였습니다."
  }
}
```

> 서버에서 오류가 발생할 경우 status(500)

```json
{
  "result": {
    "SUCCESS": false,
    "message": "error message"
  }
}
```
