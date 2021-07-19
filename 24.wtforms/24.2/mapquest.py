import requests
from secrets import key
#gitignore should have secrets.py in it so it isn't on github

endpoint = 'http://www.mapquestapi.com/geocoding/v1/address'
# key = 'CKJVsk5PLMtYvPBUbYH5BsxQvmH4Axtm'



location = 'Denver,CO'

resp = requests.get(endpoint, params = {'key': key, 'location': location})