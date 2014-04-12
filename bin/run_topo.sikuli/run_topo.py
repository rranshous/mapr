import sys, re
long0, long1 = sys.argv[1], sys.argv[2]
lat0, lat1 = sys.argv[3], sys.argv[4]
elevation = sys.argv[5]
pixel_size = sys.argv[6]
file_name = sys.argv[7]
print "longs: %s, %s" % (long0, long1)
print "lats: %s, %s" % (lat0, lat1)
print "elevation: %s" % (elevation)
print "pixel_size: %s" % (pixel_size)
print "file_name: %s" % (file_name)
print "waiting"
wait("1394596149216.png", FOREVER)
click("1394596149216.png")
wait("1394596199458.png", FOREVER)
doubleClick("1394596199458.png")
type(long0)
doubleClick("1394596279930.png")
type(long1)
doubleClick("1394596362336.png")
type(lat0)
doubleClick("1394596551235.png")
type(lat1)
doubleClick("1394596609753.png")
type('100000')
doubleClick("1394596671717.png")
type('1000')
doubleClick("1394596719469.png")
type("%s.tmp" % file_name)
click("1395114352748.png")
sleep(2)
rightClick("1397335760512.png")
click("1397336029541.png")
rightClick("1397335760512.png")
click("1397336166527.png")# pull out the correct max / min elevations

output = Env.getClipboard()
print "clipboard: %s" % output 
regex = re.compile("Limits of this file : (?P<max>-?\d+)\s+(?P<min>-?\d+) m")
r = regex.search(output)
min, max = r.groups()
print "setting min/max: %s/%s" % (min,max)

doubleClick("1397339573851.png")
type(min)
doubleClick("1397338260491.png")
type(max)

doubleClick("1397339385607.png")
type(file_name)

doubleClick("1397339633211.png")
type(pixel_size)


click("1395114352748.png")