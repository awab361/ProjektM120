import java.util.Date;

public class Person {

    public Person(String name, String vorName, Date geburtsDatum, Date beitrittsDatum, int kontonummer, int lohn, String strasse, int plz, String ort){
        this.name = name;
        this.vorName = vorName;
        this.geburtsDatum = geburtsDatum;
        this.beitrittsDatum = beitrittsDatum;
        this.kontonummer = kontonummer;
        this.lohn = lohn;
        this.strasse = strasse;
        this.plz = plz;
        this.ort = ort;
    }

    String name;
    String vorName;
    Date geburtsDatum = new Date();
    Date beitrittsDatum = new Date();
    int kontonummer;
    int lohn;
    String strasse;
    int plz;
    String ort;

    public String getName() {
        return name;
    }

    public String getVorName() {
        return vorName;
    }

    public Date getGeburtsDatum() {
        return geburtsDatum;
    }

    public Date getBeitrittsDatum() {
        return beitrittsDatum;
    }

    public int getKontonummer() {
        return kontonummer;
    }

    public int getLohn() {
        return lohn;
    }

    public int getPlz() {
        return plz;
    }

    public String getOrt() {
        return ort;
    }

    public String getStrasse() {
        return strasse;
    }
}
