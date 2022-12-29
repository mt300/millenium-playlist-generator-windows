import os

file_list = os.listdir("./media")

f = open("music.js","w")

f.write("var data = [")
count = 0
for i in file_list:
    if(count == 0):
        f.write("'"+i+"'")
    else:
        f.write(","+ "'" + i + "'")
    count = count + 1
f.write("]\n")
f.write("console.log(data)\n")
f.close()