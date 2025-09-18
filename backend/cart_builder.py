def build_smart_cart(events, weather, history):
    cart = set()

    if 'snacks' in events:
        cart.update(['chips', 'soda', 'cookies'])
    if 'travel snacks' in events:
        cart.update(['energy bars', 'juice boxes'])

    if 'comfort food' in weather:
        cart.update(['soup mix', 'tea', 'instant noodles'])

    staples = ['milk', 'bread', 'eggs']
    for item in staples:
        if item not in history[-3:]:
            cart.add(item)

    return list(cart)