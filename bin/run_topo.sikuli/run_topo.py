import sys
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
wait("1394596149216.png")
click("1394596149216.png")
wait("1394596199458.png")
doubleClick("1394596199458.png")
type(long0)
doubleClick("1394596279930.png")
type(long1)
doubleClick("1394596362336.png")
type(lat0)
doubleClick("1394596551235.png")
type(lat1)
doubleClick("1394596609753.png")
type(elevation)
doubleClick("1394596671717.png")
type(pixel_size)
doubleClick("1394596719469.png")
type(file_name)
click("1395114352748.png")
