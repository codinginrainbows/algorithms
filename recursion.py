i = 100

def recursion(p):
  if p > 0:
    if p % 10 == 0: print(p)
    recursion(p-1)

print(recursion(i))
