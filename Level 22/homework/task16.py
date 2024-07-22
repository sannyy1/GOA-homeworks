"""16. შექმენით ფუნქცია, რომელიც იღებს string'ების სიას და აბრუნებს ყველაზე გრძელ string'ს."""

def longest_string(lst):
    if not lst:
        return None

    longest = lst[0]
    for string in lst[1:]:
        if len(string) > len(longest):
            longest = string
    return longest

print(longest_string(["apple", "banana", "orange"]))
print(longest_string(["hello", "world", "python", "programming"]))
print(longest_string([""]))
