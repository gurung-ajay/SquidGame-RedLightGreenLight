# Squid Game - Red Light Green Light

This is a web-based implementation of the "Red Light, Green Light" game from the popular series "Squid Game". The game is built using the NEXT JS, React and REDUX (for state management).

![ezgif com-speed](https://github.com/user-attachments/assets/90c1bd61-a185-491b-b5f9-e2319edff748)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Game Logic](#game-logic)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features

- Player can move using the ArrowRight key.
- Young-Hee (the big doll) flips direction at random intervals.
- Game status management (running, not_running, finished).
- Audio playback when Young-Hee is facing the player.
- Redux for state management.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/gurung-ajay/SquidGame-RedLightGreenLight.git
    cd SquidGame-RedLightGreenLight
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Press the "Start Game" button to begin.
3. Use the ArrowRight key to move the player.
4. Avoid moving when Young-Hee is facing the player to avoid losing the game.

## Game Logic

- The game starts with the status `not_running`.
- When the game starts, the status changes to `running`.
- The player can move using the ArrowRight key only when the game is running.
- Young-Hee flips direction at random intervals.
- If the player moves when Young-Hee is facing them, the game status changes to `finished` and the player loses.
- If the player reaches the finish line, the game status changes to `finished` and the player wins.

## Components

- `Player`: Handles player movement and rendering.
- `YoungHee`: Handles Young-Hee's direction changes and audio playback.
- `GameStartInterface`: Interface to start the game.
- `GameOver`: Displays game over message.
- `GameName`: Displays the game name.
- `GameBody`: Main game area.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
