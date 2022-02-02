def linear_search(list,target):
    """ 
    returns the index position of the target if found,else returns none
    """
    for i in range(0,len(list)):
        if list[i]==target:
            return i
    return None        