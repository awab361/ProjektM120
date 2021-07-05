package model;

import java.util.Date;

public class Projekt {
    String projektName;
    int dauerStunden;
    int projectWert;
    Date abgabeDatum;

    public Projekt(String projektName, int dauerStunden, int projectWert, Date abgabeDatum){
        this.abgabeDatum = abgabeDatum;
        this.projectWert = projectWert;
        this.dauerStunden = dauerStunden;
        this.projektName = projektName;
    }

    public String getProjektName() {
        return projektName;
    }

    public int getDauerStunden() {
        return dauerStunden;
    }

    public int getProjectWert() {
        return projectWert;
    }

    public Date getAbgabeDatum() {
        return abgabeDatum;
    }
}
