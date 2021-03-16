from flask import Flask, request


app = Flask(__name__)

#Add a root route!
@app.route('/')
def home_page():
    html = """
    <html>
        <body>
            <h1>Hello!</h1>
            <p>This is the Home Page!</p>
            <a href='/hello'>Go to Hello page</a>
        </body>
    </html>
    """
    return html


#Add an endpoint to the server!
@app.route('/hello')
def say_hello():
    html = """
    <html>
        <body>
            <h1>Hello!</h1>
            <p>This is the Hello Page!</p>
        </body>
    </html>
    """
    return html

@app.route('/goodbye')
def say_goodbye():
    html = "Goodbye"
    return html

@app.route('/search')
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    return f'<h1>Search Results For: {term}</h1><p>Sorting by: {sort}.</p>'

# @app.route('/post', methods=["POST"])
# def post_demo():
#     return "POST REQUEST"

#GET AND POST FOR FORM
@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add Comment</h1>
    <form method = "POST">
        <input type="text" name="comment" placeholder="comment"></input>
        <input type="text" name="username" placeholder="username"></input>
        <button>Submit</button>
    </form>
    """

@app.route('/add-comment', methods=["POST"])
def save_comment():
    print(request.form)
    comment = request.form["comment"]
    username = request.form["username"]
    return f"""
    <h1>{username} says: {comment}</h1>
    """


POSTS = {
    1: "Hey",
    2: "I like things and stuff",
    3: "YOLOOO"
}
#variable routes
@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"This is a subreddit for {subreddit}."

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS.get(id, "POST NOT FOUND")
    return f"<p>{post}</p>"