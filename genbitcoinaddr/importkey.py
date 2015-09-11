'''
simple script to import private key into coin daemon
'''
import os

cli = 'bitcoin-cli'

with open('test2.log') as fp:
    for line in fp:
        cmd = cli + ' importprivkey ' + str(line)
        os.system(cmd)
        print cmd
        


