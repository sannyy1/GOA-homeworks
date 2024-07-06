#1
def greater_than_five(num):
    if num <= 5:
        return 6  
    else:
        return num  

num = 3
result = greater_than_five(num)
print(f"A number greater than 5: {result}")



#2
def product_of_two_numbers(num1, num2):
    return num1 * num2

num1 = 5
num2 = 7
result = product_of_two_numbers(num1, num2)
print(f"The product of {num1} and {num2} is: {result}")



#3
def get_string_length(input_string):
    length = len(input_string)
    return length

string = "Hello, World!"
length_of_string = get_string_length(string)
print(f"The length of the string '{string}' is: {length_of_string}")


#4
def lengths_of_strings(string_list):
    lengths = [len(s) for s in string_list]
    return lengths

strings = ["apple", "banana", "orange", "kiwi"]
lengths = lengths_of_strings(strings)
print(f"The lengths of the strings {strings} are: {lengths}")


#5
def is_palindrome(s):
    s = s.replace(" ", "").lower()
    
    return s == s[::-1]

string1 = "wow"
string2 = "Hello"
string3 = "A man a plan a canal Panama"

print(f'Is "{string1}" a palindrome? {is_palindrome(string1)}')
print(f'Is "{string2}" a palindrome? {is_palindrome(string2)}')
print(f'Is "{string3}" a palindrome? {is_palindrome(string3)}')


#6
def find_longest_string(string_list):
    if not string_list:  
        return None
    
    longest_string = string_list[0]  
    for s in string_list:
        if len(s) > len(longest_string):
            longest_string = s
    
    return longest_string

strings = ["apple", "banana", "orange", "kiwi", "watermelon"]
longest = find_longest_string(strings)
print(f"The longest string in the list is: '{longest}'")