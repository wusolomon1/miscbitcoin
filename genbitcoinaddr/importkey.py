'''
simple script to import private key into coin daemon
'''
import os
import sys

cli = 'bitcoin-cli -gcoin'

if len(sys.argv) < 2:
	print 'usage: python importkey.py <filename>'

filename = sys.argv[1]

with open(filename) as fp:
    for line in fp:
    	# add 0 at the end so that it does not rescan blockchain each time.
        cmd = cli + ' importprivkey ' + str(line) + " 0"
        os.system(cmd)
        print cmd
        


