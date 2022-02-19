import sys
import signal
import time
def quit(signum, frame):
    print(' ')
    print('stop fusion')
    sys.exit()
def printLine():
    signal.signal(signal.SIGINT, quit)
    signal.signal(signal.SIGTERM, quit)
    a=1
    while True:
        a+=a+1
        print("Loading",end = "")
        for i in range(20):
            print(".",end = '',flush = True)
            time.sleep(0.5)

print("---RUN DOT EXAMPLE :Loading ---")
printLine()