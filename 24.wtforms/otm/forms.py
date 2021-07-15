from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField
from funcs import getDeptartmentChoices

class AddSnackForm(FlaskForm):
    """Form for adding snacks"""

    name = StringField("Snack Name")
    price = FloatField("Price in USD")
    amount = IntegerField("Amount")
    is_healthy = BooleanField("Is this a healthy snack?")
    category = RadioField("Category", choices = [('ic','Ice Cream'),('chips', 'Potato Chips')])
    kategory = SelectField("Kategory", choices = [(1,'Ice Cream'),(2, 'Potato Chips')],
    coerce = int)

class NewEmployeeForm(FlaskForm):
    """Adding new employee"""

    name = StringField("Employee Name")
    state = StringField("State")
    # dept_code = SelectField("Department Code")

    #Not supposed to be hardcoded, but the video example didn't work, nor does my flask debugger
    dept_code = SelectField("Department Code", choices = [('mktg', 'Marketing'),('rd', 'Research'),('acct', 'Accounting'),('sales', 'Sales'),('it', 'Information Technology')])
    # dept_code = SelectField("Department Code", choices = getDeptartmentChoices())