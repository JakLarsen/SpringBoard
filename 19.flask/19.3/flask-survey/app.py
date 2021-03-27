from flask import Flask, request, render_template, redirect, flash, jsonify, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import Question, Survey, satisfaction_survey, personality_quiz, Response
import sys

app = Flask(__name__)

# the toolbar is only enabled in debug mode:
app.debug = True

# set a 'SECRET_KEY' to enable the Flask session cookies
app.config['SECRET_KEY'] = 'coolbeans'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)

#Can use any survey here
ourSurvey = personality_quiz
survey_length = len(ourSurvey.questions)

#setup a response class in surveys.py to hold 
# -list of responses
# -boolean for first response flag
ourResponse = Response(True, [])

def resetOurSession():
    session['responses'] = []
    session['isFirst'] = True

def resetOurResponse():
    ourResponse.responses = []
    ourResponse.isFirst = True

#Why does the text for the survey and instruction variables disappear when the survey starts?
@app.route('/')
def home_page():
    """Shows Home Page on Start"""

    return render_template(
        'home.html', 
        title = ourSurvey.title, 
        instructions = ourSurvey.instructions
        )

@app.route("/start", methods=["POST"])
def start_survey():
    """Shows First Question on Start Button Click"""

    resetOurSession()
    # resetOurResponse()
    return redirect("/questions/1")


@app.route('/questions/<int:id>')
def handle_questions(id):
    """Verifies the correct endpoint for the question"""

    if session['isFirst'] == True:
        session['isFirst'] = False
        return redirect('/questions/1')
    if len(session['responses']) == survey_length:
        return redirect('/complete')
    if len(session['responses']) +1 != id:
        flash("Wrong Question Request!", 'error')
        session_length = len(session['responses'])
        return redirect(f'/questions/{session_length + 1}')
    if len(session['responses']) + 1 == id:
        return render_template(
            'question.html', 
            question = ourSurvey.questions[id-1].question,
            choices = ourSurvey.questions[id-1].choices,
            survey_length = survey_length,
            title = ourSurvey.title, 
            instructions = ourSurvey.instructions
            )
    return redirect('/error')

    # if ourResponse.isFirst == True:
    #     ourResponse.isFirst = False
    #     return redirect('/questions/1')

    # if len(ourResponse.responses) == survey_length:
    #     return redirect('/complete')

    # if len(ourResponse.responses) + 1 != id:
    #     flash("Wrong Question Request!", 'error')
    #     return redirect(f'/questions/{len(ourResponse.responses) + 1}')

    # if len(ourResponse.responses) + 1 == id:
    #     return render_template(
    #         'question.html', 
    #         question = ourSurvey.questions[id-1].question,
    #         choices = ourSurvey.questions[id-1].choices,
    #         survey_length = survey_length
    #         )
            
    # return redirect('/error')

#Add response to list, take us to next question or completion page if done
@app.route('/answer', methods=["POST"])
def add_answer():
    print('In add_answer()')

    #Validate to selected answer : "No Answer" for no radio button selection
    choice = request.form.get('choice', "No Answer")
    response_list = session['responses']
    response_list.append(choice)
    session['responses'] = response_list
    # ourResponse.responses.append(choice)

    if len(session['responses']) != survey_length:
        session_length = len(session['responses']) 
        return redirect(f'/questions/{session_length + 1}')
    else:
        return redirect('/complete')

    # #Take user to question they are on or completed page given they are done
    # if len(ourResponse.responses) != survey_length:
    #     return redirect(f'/questions/{len(ourResponse.responses) + 1}')
    # else:
    #     return redirect('/complete')

#Completed Survey!
@app.route('/complete')
def show_complete():   

    if len(session['responses']) == survey_length:
        return render_template('/complete.html')

    # if len(ourResponse.responses) == survey_length:
    #     return render_template('/complete.html')

    #Attempt to access endpoint without completing survey takes you to question you should be on
    #Ideally I'd have a flag to know if the survey was started
    # - then I could take someone back to start point if it wasn't yet, or question if it was
    else:
        session_length = len(session['responses'])
        return redirect(f'/questions/{session_length + 1}')

    # else:
    #     return redirect(f'/questions/{len(ourResponse.responses) + 1}')

#I don't know how to check our python variables properly using Flask, so I made a response display for them...
#Help!
@app.route('/responses')
def show_responses():
    return render_template(
        '/responses.html', 
        responses = session['responses'], 
        isFirst = session['isFirst']
        )
    
    
    
    # return render_template(
    #     '/responses.html', 
    #     responses = ourResponse.responses, 
    #     isFirst = ourResponse.isFirst
    #     )

#Error flash will print twice sometimes??
#Survey and Instruction text disappears when survey starts??
#--Fixed by passing variables in question endpoint
