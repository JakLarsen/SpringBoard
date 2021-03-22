from flask import Flask, request, render_template, redirect, flash, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from surveys import Question, Survey, satisfaction_survey, personality_quiz

app = Flask(__name__)

# the toolbar is only enabled in debug mode:
app.debug = True

# set a 'SECRET_KEY' to enable the Flask session cookies
app.config['SECRET_KEY'] = 'coolbeans'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)

ourSurvey = personality_quiz
survey_length = len(ourSurvey.questions)

#should be called nextQuestion probably
currQuestion = 1
responses = []


def resetSurvey():
    responses = []
    currQuestion = 1

def isSurveyComplete():
    if currQuestion > survey_length:
        return True
    else:
        return False

#Update and retrieve our next question
def getCurrQuestion():
    global currQuestion
    currQuestion += 1
    if isSurveyComplete():
        #why cant I put this line only in resetSurvey()??? 
        #I get a ERR TOO MANY REDIRECTS and page breaks...
        #Must be an ordering thing... currQuestion must be not -1 when we call it for some reason
        currQuestion = 1
        return -1
    else:
        return currQuestion

#Validate that you're only requesting the URL of the question you're on
def isValidQuestion(id):
    if currQuestion == id:
        return True
    else:
        return False



@app.route('/')
def home_page():
    """Shows Home Page"""

    return render_template(
        'home.html', 
        title = ourSurvey.title, 
        instructions = ourSurvey.instructions
        )

@app.route('/questions/<int:id>')
def show_questions(id):
    if isValidQuestion(id):
        return render_template(
            'question.html', 
            question = ourSurvey.questions[id-1].question,
            choices = ourSurvey.questions[id-1].choices,
            survey_length = survey_length
            )
    else:
        return redirect('/questions/1')

#Add response to list, take us to next question or completion page if done
@app.route('/answer', methods=["POST"])
def add_answer():

    #Validate to selected answer : "No Answer" for no radio button selection
    choice = request.form.get('choice', "No Answer")
    responses.append(choice)

    #Get question # or completion indication = -1
    currQuestion = getCurrQuestion()
    if currQuestion != -1:
        return redirect(f'/questions/{currQuestion}')
    else:
        resetSurvey()
        return redirect(f'/complete')

#Complete!
@app.route('/complete')
def show_complete():   
    return render_template('/complete.html')

#I don't know how to check our python variables using Flask, so I made a response display for them...
#Help!
@app.route('/responses')
def show_responses():
    return render_template('/responses.html', responses = responses)




