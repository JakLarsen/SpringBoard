from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def show_home():
    return render_template('base.html')

@app.route('/form')
def show_form():
    return render_template('form.html')

@app.route('/story')
def show_story():
    return render_template('story.html')



