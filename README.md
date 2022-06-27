# Rooftop challenge

[check file](https://github.com/garciagomezluis/rooftop-challenge/blob/3bf5ebdaa3a999ac6fbe21548566a053f9409f54/services/rooftop.ts#L20)

[test file](https://github.com/garciagomezluis/rooftop-challenge/blob/3bf5ebdaa3a999ac6fbe21548566a053f9409f54/__tests__/rooftop.js#L28)

## Commands

Start a development enviroment on `http://localhost:3000`

> npm run dev

Run tests

> npm test

## API

#### Using an environment variable

Get the sorted blocks using a token from an environment variable `ROOFTOP_TOKEN`. This will get the blocks, try to sort them and verify the output.

> [GET] /api/check

```json
    {
        "data": ["block1", ..., "blockK"]
    }
```

#### Using an email from an logged in user

Get the sorted blocks using an emain from a logged in user. This will get the blocks, try to sort them and verify the output.

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