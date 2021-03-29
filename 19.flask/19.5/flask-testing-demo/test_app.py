"""Sample test suite for testing demo."""

from unittest import TestCase
from app import app
from flask import session

# Make Flask errors be real python errors, not HTML pages with error info
app.config['TESTING'] = True

# This is a bit of hack, but don't use Flask DebugToolbar while integration testing
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']


class ColorViewsTestCase(TestCase):
    """Examples of integration tests: testing Flask app."""

    #will run once before the entire list of tests
    @classmethod
    def setUpClass(cls):
        print("Inside setUpClass")
    
    #will run before every test
    def setUp(self):
        print("Inside setUp")
    
    #will run after every test
    def tearDown(self):
        print("Inside tearDown")

    #will run once after the entire list of tests
    @classmethod
    def tearDownClass(cls):
        print("Inside tearDownClass")



    def test_color_form(self):
        #makes a test server client to run tests on
        with app.test_client() as client:
            # can now make requests to flask via `client`
            resp = client.get('/')
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<h1>Color Form</h1>', html)

    def test_color_submit(self):
        with app.test_client() as client:
            resp = client.post('/fav-color',
                               data={'color': 'blue'})
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('Woah! I like blue, too', html)

    def test_redirection(self):
        with app.test_client() as client:
            resp = client.get("/redirect-me")

            self.assertEqual(resp.status_code, 302)
            self.assertEqual(resp.location, "http://localhost/")

    def test_redirection_followed(self):
        with app.test_client() as client:
            resp = client.get("/redirect-me", follow_redirects=True)
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<h1>Color Form</h1>', html)

    def test_session_info(self):
        with app.test_client() as client:
            resp = client.get("/")

            self.assertEqual(resp.status_code, 200)
            self.assertEqual(session['count'], 1)

    def test_session_info_set(self):
        with app.test_client() as client:
            # Any changes to session should go in here:
            #.session_transaction() allows us to change the session and test it
            with client.session_transaction() as change_session:
                change_session['count'] = 999

            # Now those changes will be in Flask's `session`
            resp = client.get("/")

            self.assertEqual(resp.status_code, 200)
            self.assertEqual(session['count'], 1000)
