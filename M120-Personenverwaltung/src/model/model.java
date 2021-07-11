package model;

import java.util.ArrayList;
import java.util.Date;

public class model {

    ArrayList<Abteilung> abteilungen = new ArrayList<Abteilung>();
    ArrayList<Person> personen = new ArrayList<Person>();
    ArrayList<Projekt> projekte = new ArrayList<Projekt>();
    ArrayList<Spesen> spesen = new ArrayList<Spesen>();

    public model(){
        personen.add(new Person("Alesandrini", "Morata", new Date(2002, 12, 22), new Date(2011, 03, 12), 3335316, 244, "MusterStrasse22", 7000, "Chur"));
        personen.add(new Person("Mattia", "Perin", new Date(1997, 10, 08), new Date(2015, 05, 11), 9000452586, 5000, "Rotstrassse 5", 8000, "Zürich"));
        personen.add(new Person("Katieni", "Allesandro", new Date(2000, 01, 01), new Date(2019, 08, 01), 90000458568, 4100, "Postplatz 2", 7001, "Churwest"));
        personen.add(new Person("Captain", "Miller", new Date(1960, 05, 28), new Date(1998, 12, 01), 90000123598, 10000, "Bahnhofstrasse 1", 9000, "St.Gallen"));
        personen.add(new Person("Cristiano", "Ronaldo", new Date(1985, 07, 07), new Date(2000, 01. 15), 50000457895, 1000000, "Juventusstrasse 7", 7700, "Milano"));
        personen.add(new Person("Leonardo", "Dicaperio", new Date(1980, 08, 18), new Date(1998, 06, 15), 50000786535, 60000, "Worlfstreet 8", 85245, "NewYork"));
        personen.add(new Person("Andrea", "Roman", new Date(1989, 10, 27), new Date(2009, 08, 03), 90000542135, 5800, "Gelbstrasse 12", 7108, "Cazis"));
        personen.add(new Person("Ramin", "Kabir", new Date(1995, 04, 27), new Date(2016, 07, 20), 70000451236, 4800, "Dorfstrasse 41", 5000, "Arau"));
        personen.add(new Person("Ahmad", "Kabir", new Date(1999, 03, 24), new Date(2019, 02, 25), 5000451278, 3900, "Calandastrasse 27", 7000, "Chur"));
        personen.add(new Person("Samim", "Nasir", new Date(1980, 05, 29), new Date(2015, 05, 15), 90000124578, 6000, "Ringstrasse 12", 7001, "Chur"));
    }
}
