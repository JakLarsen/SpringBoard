import requests

resp = requests.get("https://itunes.apple.com/search?parameterkeyvalue", params = {'term': 'Jack Johnson', 'limit': 5})

data = resp.json()

for result in data['results']:
    print(result['trackName'])
    print(result['collectionCensoredName'])


dataPost = {
    'username': 'chickenz',
    'tweets': [
        'hello!', 'goodbye!', {
            'id': 1, 'text': 'my first tweet'}
    ]
}

requests.post('https://en27bnyebtkl.x.pipedream.net', json=dataPost)