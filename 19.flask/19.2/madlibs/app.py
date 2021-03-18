from flask import Flask, request, render_template
from random import randint, choice, sample
from stories import Story

app = Flask(__name__)

#Story instance to use to show the forms are not hardcoded and can be used with different prompts
myStory = Story(
    ["animal", "noun", "verb", "adjective", "plural_noun"],
    """One {adjective} day, a little {animal} and his {plural_noun} went to the {noun} to {verb}."""
)

@app.route('/')
def show_home():
    return render_template('base.html')

@app.route('/form')
def show_form():
    story_words = myStory.prompts
    return render_template('form.html', story_words = story_words)

@app.route('/story')
def show_story():
    text = myStory.generate(request.args)
    return render_template('story.html', text = text)


# Did the entire thing except for line 24, but do NOT understand how to set something like this up for myself
# Where are the query strings being defined on form submit?????
# What is request.args? Why can I not capture it in a variable? Yet it works within this function?

