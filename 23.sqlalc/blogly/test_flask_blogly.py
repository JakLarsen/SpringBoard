from unittest import TestCase

from app import app
from models import db, User

# Use test database and don't clutter tests with SQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_test_db'
app.config['SQLALCHEMY_ECHO'] = False

# Make Flask errors be real errors, rather than HTML pages with error info
app.config['TESTING'] = True

# This is a bit of hack, but don't use Flask DebugToolbar
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

db.drop_all()
db.create_all()

class UserViewsTestCase(TestCase):
    """TESTS FOR VIEWS FOR USER MODEL"""

    def setUp(self):
        """ADD SAMPLE USER"""

        User.query.delete()

        user = User(first_name = 'TestUser', last_name= 'TestLast', image_url="TestLink")

        db.session.add(user)
        db.session.commit()

        self.user = user
        self.user_id = user.id
    
    def tearDown(self):
        """ROLLBACK TRANSACTIONS"""

        db.session.rollback()

    def test_home_redirect(self):
        with app.test_client() as client:
            response = client.get('/')
            # html = response.get_data(as_text=True)
            # print(dir(response), flush = True)
            # print(response.status_code, flush=True)

            self.assertEqual(response.status_code, 302)
    
    def test_show_users(self):
        with app.test_client() as client:
            response = client.get('/users')
            html = response.get_data(as_text=True)

            self.assertEqual(response.status_code, 200)
            self.assertIn('TestUser', html)
    
    def test_show_user_details(self):
        with app.test_client() as client:
            r = client.get(f'/users/{self.user_id}')
            html = r.get_data(as_text=True)

            self.assertEqual(r.status_code, 200)
            self.assertIn('First Name: TestUser', html)
            self.assertIn('name="delete"', html)
    
    def test_add_user_post(self):
        with app.test_client() as client:
            d = {"first_name": 'TestUser', "last_name": 'TestLast', 'img': "TestLink"}
            r = client.post('/users/add', data=d, follow_redirects=True)
            html = r.get_data(as_text=True)

            self.assertEqual(r.status_code, 200)
            self.assertIn('TestUser', html)


