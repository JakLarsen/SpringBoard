from flask import Flask, render_template, redirect, request
from flask.templating import render_template_string
import requests
from spy import key

API_BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address'

app = Flask(__name__)

def get_coordinates(address):
    resp = requests.get(API_BASE_URL, params={'key': key, 'location': address})
    data = resp.json()
    lat = data['results'][0]['locations'][0]['latLng']['lat']
    lng = data['results'][0]['locations'][0]['latLng']['lng']
    coords = {'lat': lat, 'lng': lng}
    return coords

@app.route('/')
def show_address_form():
    return render_template('address_form.html')

@app.route('/geocode')
def get_geocode_from_address():
    address = request.args['address']
    coords = get_coordinates(address)
    return render_template('geocode_display.html', coords = coords)