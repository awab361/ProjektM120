import javafx.application.Application;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.DatePicker;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.scene.control.Button;


import java.awt.*;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception{
        Parent root = FXMLLoader.load(getClass().getResource("View/WorkLogForm.fxml"));
        primaryStage.setTitle("Hello WorkLog");
        primaryStage.setScene(new Scene(root, 500, 275));
        primaryStage.show();

    }

    public static void main(String[] args) {
        launch(args);
    }
}
