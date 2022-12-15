with open("ex8express/flight_2015.json") as fichierOld:
    with open("ex8express/flight_2015new.json","w") as fichierNew:
        fichierNew.write("[\n")
        line = fichierOld.readline()
        while line:
            line = line.replace("}", "},")
            fichierNew.write(line)
            line = fichierOld.readline()
        fichierNew.write("]")

