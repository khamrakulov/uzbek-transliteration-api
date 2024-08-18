# Uzbek Language Transliteration API

This project provides an API for transliterating Uzbek text between Latin and Cyrillic scripts. Built using the NestJS framework and TypeScript, it offers two main endpoints for transliteration.

## Features

- **Transliterate from Latin to Cyrillic:** Convert Uzbek text written in the Latin script to the Cyrillic script.
- **Transliterate from Cyrillic to Latin:** Convert Uzbek text written in the Cyrillic script to the Latin script.

## Endpoints

### `/transliterate/to-latin`

- **Method:** `POST`
- **Description:** Transliterates Uzbek text from Cyrillic to Latin.
- **Request Body:**
  ```json
  {
    "text": "your cyrillic text here"
  }
  ```
- **Response:**
  ```json
  {
    "transliteratedText": "transliterated latin text"
  }
  ```

### `/transliterate/to-cyrillic`

- **Method:** `POST`
- **Description:** Transliterates Uzbek text from Latin to Cyrillic.
- **Request Body:**
  ```json
  {
    "text": "your latin text here"
  }
  ```
- **Response:**
  ```json
  {
    "transliteratedText": "transliterated cyrillic text"
  }
  ```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/khamrakulov/uzbek-transliteration.git
   cd uzbek-transliteration
   ```

2. **Install dependencies:**

   ```bash
   yarn add
   ```

3. **Start the development server:**

   ```bash
   yarn start:dev
   ```

   The server will be running at `http://localhost:3000`.

## Usage

You can test the endpoints using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

### Example cURL Commands

- **To Latin:**

  ```bash
  curl -X POST http://localhost:3000/transliterate/to-latin -H "Content-Type: application/json" -d '{"text": "Тест"}'
  ```

- **To Cyrillic:**

  ```bash
  curl -X POST http://localhost:3000/transliterate/to-cyrillic -H "Content-Type: application/json" -d '{"text": "Test"}'
  ```

## Project Structure

- **`src/`**: Contains the main application code.
  - **`transliterate/`**: Contains the transliteration logic.
    - **`controllers/`**: Controllers of transliterate module.
    - **`dtos/`**: Data transfer objects for transliterate module.
    - **`services/`**: Services for transliterate module.
  - **`app.module.ts`**: The root module of the application.
  - **`main.ts`**: The entry point of the application.
- **`test/`**: Contains the unit tests.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.
