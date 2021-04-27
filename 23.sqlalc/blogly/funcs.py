import datetime

def get_date_time():
    now = datetime.datetime.now()
    our_date_time = f'{now.year}-{now.month}-{now.day} {now.hour}:{now.minute}:{now.second}'
    return our_date_time



