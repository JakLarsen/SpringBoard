"""SEED FILE FOR USERS

python seed.py to seed the database with .py file
"""

from models import User, Post, Tag, PostTag, db
from app import app

#create all tables
db.drop_all()
db.create_all()

#If table isn't empty, empty it
User.query.delete()

#add users
jake = User (first_name = "Jake", last_name = "Larsen")
molly = User (first_name = "Molly", last_name = "Larsen")
sdeven = User (first_name = "Sdeven", last_name = "Sdephensen")
bob = User (first_name = "Bob", last_name = "Bobertson")

db.session.add_all([jake, molly, sdeven, bob])
db.session.commit()

#add posts
jake_p1 = Post(title = "My First Post!", content = "This is my first post - I'm so proud!", user_id = 1)
jake_p2 = Post(title = "My Second Post", content = "Alright, I'm bored.", user_id = 1)
molly_p1 = Post(title = "A little about my day", content = "Didn't do much!", user_id = 2)
molly_p2 = Post(title = "My Second Post", content = "Maybe I'll learn to play piano tomorrow", user_id = 2)

db.session.add_all([jake_p1, jake_p2, molly_p1, molly_p2])
db.session.commit()

#add tags
daily = Tag(name="Daily")
fun = Tag(name="Funny")
research = Tag(name="Research")
cool = Tag(name="Cool")

db.session.add_all([daily,fun,research,cool])
db.session.commit()

#add PostTags
one_one = PostTag(post_id = 1, tag_id = 1)
one_two = PostTag(post_id = 1, tag_id = 2)
one_three = PostTag(post_id = 1, tag_id = 4)
two_one = PostTag(post_id = 2, tag_id = 1)
two_two = PostTag(post_id = 2, tag_id = 2)
three_three = PostTag(post_id = 3, tag_id = 3)

db.session.add_all([one_one, one_two, one_three, two_one, two_two, three_three])
db.session.commit()

