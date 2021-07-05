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
        personen.add(new Person("Mattia", "Perin"));
        personen.add(new Person());
        personen.add(new Person());
        personen.add(new Person());
        personen.add(new Person());
        personen.add(new Person());
        personen.add(new Person());
        personen.add(new Person());
        personen.add(new Person());
    }
}
