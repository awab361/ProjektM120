package View;


import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import model.model;

import java.net.URL;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.ResourceBundle;

public class Controller implements Initializable{

    private model model;

    @FXML
    private DatePicker startDate;

    @FXML
    private TextField startTime;

    @FXML
    private DatePicker endDate;

    @FXML
    private TextField endTime;

    @FXML
    private TextField subject;

    @FXML
    ComboBox<String> projectList;

    @FXML
    Button saveWorkLog;

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {

    }
}
