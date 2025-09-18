def get_upcoming_events(calendar_events):
    keywords = []
    for event in calendar_events:
        title = event.get('title', '').lower()
        if 'dinner' in title or 'party' in title:
            keywords.append('snacks')
        if 'trip' in title or 'travel' in title:
            keywords.append('travel snacks')
    return keywords