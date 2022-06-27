# Rooftop challenge

[check file](https://github.com/garciagomezluis/rooftop-challenge/blob/3bf5ebdaa3a999ac6fbe21548566a053f9409f54/services/rooftop.ts#L20)

[test file](https://github.com/garciagomezluis/rooftop-challenge/blob/3bf5ebdaa3a999ac6fbe21548566a053f9409f54/__tests__/rooftop.js#L28)

## Commands

(after installation: git clone ... && npm install ...)

Start a development enviroment on `http://localhost:3000`

> npm run dev

Run tests

> npm test

### Environment variables

```text
ROOFTOP_TOKEN=<ROOFTOP TOKEN>
GOOGLE_ID=<GOOGLE ID>
GOOGLE_SECRET=<GOOGLE SECRET>
NEXTAUTH_SECRET=<RANDOMLY GENERATED NUMBER>
```

## API

#### Using an environment variable

Get the sorted blocks using a token set on an environment variable `ROOFTOP_TOKEN`. This will get the blocks, try to sort them and verify the output. Use just on development.

> [GET] /api/check

```json
    {
        "data": ["block1", ..., "blockK"]
    }
```

#### Using an email of an logged in user

Get the sorted blocks using an emain of a logged in user. This will get the blocks, try to sort them and verify the output.

> [GET] /api/blocks

```json
    {
        "data": ["block1", ..., "blockK"]
    }
```

### Error codes

* __200__: OK (all)
* __500__: Server error (all)
* __401__: Not authenticated (`/api/bocks`)

```json
{
    "data": "Error message"
}
```

## App

Using this small app you will be able to log in and automatically get the sorted blocks available for your email. Please visit `http://localhost:3000/` on a development enviroment.

## Live version

[Deployed app](https://rooftop-challenge-five.vercel.app/)

![video](https://drive.google.com/file/d/1L13AMkxI2J64GeRPp5-91xIEv1NezYnA/view)