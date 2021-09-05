#!/usr/bin/env python3
import math

def main(): 
    try:
        while True:
            print('Press "ctrl-c" to quit.')

            cardNum = int(input("Enter Card Number: "))
            page = math.floor(cardNum / 9)
            if cardNum%9 == 0:
                page = page - 1
                slot = 9
            else:
                slot = cardNum - (page * 9)

            print(f'Card number {cardNum} goes on page {page + 1}, slot {slot}')

            for index, item in enumerate('ooooooooo', start=1):
                if index == slot:
                    item = 'x'
                print(item, end=' ' if index % 3 else '\n')

            print("\n")
    except KeyboardInterrupt:
        print("\nQuitting")
        exit()

if __name__ == "__main__":
    # execute only if run as a script
    main()