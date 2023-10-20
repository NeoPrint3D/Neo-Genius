# remove all non-alphabetic, but keep the apostrophe
import re


print(re.sub(r'[^a-zA-Z\']', ' ', "I'm a string!"))