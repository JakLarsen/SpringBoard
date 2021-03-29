from boggle import Boggle
from flask import Flask, render_template, request, redirect, session, jsonify, make_response


app = Flask(__name__)
app.secret_key = 'coolbeans'

boggle_game = Boggle()

def getBoard():
    return session['board']

def instantiateBoard():
    session['board'] = boggle_game.make_board()
    # print(session['board'], flush=True)
    return session['board']

def updateDuplicateResponse(guessedList, guess):

    is_a_duplicate = boggle_game.is_duplicate_word(guessedList, guess)

    if not is_a_duplicate:
        guessed_words = session['guessed_words']
        guessed_words.append(guess)
        session['guessed_words'] = guessed_words

        return "ok"
    else:

        return "duplicate"
 

@app.route('/')
def show_home():
    return render_template('home.html')

@app.route('/start')
def start_game():
    game_board = instantiateBoard()
    session['guessed_words'] = ['']
    return redirect('/game')

@app.route('/game')
def play_game():
    game_board = getBoard()
    return render_template('game.html', game_board = game_board)


@app.route('/guess')
def check_guess():
    guess = request.args["guess"]
    game_board = session['board']
    guessed_words = session['guessed_words']

    duplicate_check = updateDuplicateResponse(guessed_words, guess)

    is_valid_word = boggle_game.check_valid_word(game_board, guess)

    return jsonify({'result': is_valid_word, 'duplicate': duplicate_check})

@app.route('/stats')
def update_stats():
    return render_template('stats.html')

    