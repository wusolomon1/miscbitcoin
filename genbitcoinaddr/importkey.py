'''
simple script to import private keys into coin daemon
private keys should be in a file (one line per key).  
private key should be a string in wif format.  
'''
import os
import sys

cli = 'bitcoin-cli -gcoin'

if len(sys.argv) < 2:
	print 'usage: python importkey.py <filename>'
	sys.exit(1)

filename = sys.argv[1]

# this may not be able to handle a large file too well.
privkeys = open(filename,'r').read().splitlines()

for privkey in privkeys:
	cmd = cli + ' importprivkey ' + str(privkey) + " 0"
	os.system(cmd)
	print cmd

# with open(filename) as fp:
#     for line in fp:
#     	# add 0 at the end so that it does not rescan blockchain each time.
#         cmd = cli + ' importprivkey ' + str(line) + " 0"
#         os.system(cmd)
#         print cmd
        


