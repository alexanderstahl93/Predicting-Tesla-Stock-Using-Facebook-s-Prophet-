# Predicting Tesla Stock Using Facebook's Prophet
This project aims to predict Tesla's stock prices using Facebook's Prophet library. The project also includes a simple web interface to visualize the predictions.

# Structure of the Project
The project has two main parts:

1. A Jupyter notebook (predicting-tesla-stock-using-facebook-s-prophet.ipynb) that contains the code for training the Prophet model on historical Tesla stock price data and making predictions.
2. A simple web application that serves the predictions. The web app is built with Node.js and includes the following files:
   - server.js: The main server file.
   - index.html: The main HTML file for the web interface.
   - script.js: The JavaScript file containing client-side code.
   - style.css: The CSS file containing styles for the web interface.
     
## Installation and Running
### Requirements
- Python 3.7 or higher
- Node.js and npm

### Steps
1. Clone the repository or download the zip file and extract it.
2. Navigate to the project directory in a terminal.
3. Install the necessary Python libraries with the command pip install -r requirements.txt (Please note, the requirements.txt file needs to be provided in the repository).
4. Run the Jupyter notebook predicting-tesla-stock-using-facebook-s-prophet.ipynb.
5. Install Node.js dependencies using the command npm install.
6. Run the server with node server.js.
7. Open a web browser and navigate to http://localhost:3000 (or the port specified in server.js).

### Usage
Use the web interface to interact with the model and visualize predictions.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.
