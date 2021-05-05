""" Seed file for sample data for db"""

from models import Department, Employee, Project, EmployeeProject, db
from app import app

#create all new tables
db.drop_all()
db.create_all()

d1 = Department(dept_code='mktg', dept_name='Marketing', phone='123-4567')
d2 = Department(dept_code='acct', dept_name='Accounting', phone='223-4567')
d3 = Department(dept_code='rd', dept_name='Research', phone='323-4567')
d4 = Department(dept_code='sales', dept_name='Sales', phone='423-4567')
d5 = Department(dept_code='it', dept_name='Information Technology', phone='523-4567')

db.session.add_all([d1,d2,d3,d4,d5])
db.session.commit()

river = Employee(name='River Bottom', state='NY',dept_code='mktg' )
joan = Employee(name='Joan Accounts', state='WI',dept_code='acct' )
summer = Employee(name='Summer Bottom', state='NY',dept_code='mktg' )
bill = Employee(name='Bill Accounts', state='WI',dept_code='acct' )
susan = Employee(name='Susan IT', state='IL',dept_code='it' )
itbill = Employee(name='IT BILL', state='WA',dept_code='it' )
rbill = Employee(name='RESEARCH BILL', state='WI',dept_code='rd' )
kate = Employee(name='Kate Research', state='CA',dept_code='rd' )

db.session.add_all([river,summer,joan,bill,susan,itbill,rbill,kate])
db.session.commit()

car = Project(
    project_code='car', project_name = "Design Automobile",
    assignments =[
        EmployeeProject(emp_id = kate.id, role='Chair'),
        EmployeeProject(emp_id = bill.id)
    ]
)
server = Project(
    project_code='server', project_name = "Server Maintenance",
    assignments =[
        EmployeeProject(emp_id = kate.id, role = 'Chair'),
        EmployeeProject(emp_id = river.id, role = 'IT Manager'),
        EmployeeProject(emp_id = joan.id, role = 'IT Intern')
    ]
)

db.session.add_all([car,server])
db.session.commit()
