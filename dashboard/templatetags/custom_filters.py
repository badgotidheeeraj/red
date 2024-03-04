from django import template
import re

register = template.Library()


@register.filter(name='hyphanate')
def hyphanate(value):
    return value.replace(' ', '_').replace(',', '').replace('.', '').replace('(', '').replace(')', '').replace('"', '')

@register.filter(name='match_request_string')
def match_request_string(text):
    # Use regular expression to find the word "Request" (case-insensitive) as a whole word
    pattern = re.compile(r'request', re.IGNORECASE)
    return bool(pattern.search(text)) 


@register.filter(name='truncate_string')
def truncate_string(value, max_length):
    if len(value) > max_length:
        return value[:max_length] + '...'
    return value

@register.filter(name='extract_file_name')
def extract_file_name(file_path):
    return file_path.name.split("/")[-1]


@register.filter(name='reverse_order')
def reverse_order(value):
    return reversed(value)


# @register.filter(name='break_if_non_empty')
# def break_if_non_empty(value):
#     for item in value:
#         print('this is item',item)
#         if item: 
#             break
#         yield item



# @register.filter(name='is_str')
# def is_str(value):
#     return isinstance(value, str)


@register.filter(name='get') 
def get_item(dictionary, key):
    if dictionary:
        return dictionary.get(key, None)
    return None


@register.filter(name='get_value') 
def get_value(dictionary, key):
    if dictionary:
        return dictionary.get(key, None)
    """
    Custom template filter to get the value of a key from a dictionary.
    Returns None if the key doesn't exist.
    """
    return None