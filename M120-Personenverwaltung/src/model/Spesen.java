package model;

public class Spesen {
    String grund;
    int betrag;
    String status;

    public Spesen(String grund, int betrag, String status){
        this.grund = grund;
        this.betrag = betrag;
        this.status = status;
    }

    public int getBetrag() {
        return betrag;
    }

    public String getGrund() {
        return grund;
    }

    public String getStatus() {
        return status;
    }
}
