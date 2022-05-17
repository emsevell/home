import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class List {
    public static void main(String[] args) {
        final int pageNumber = 5;
        String[] c = new String[pageNumber];
        try {
            File captions = new File("captions.txt");
            Scanner myReader = new Scanner(captions);
            int z = 0;
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                c[z] = data;
                z++;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        for (int i = 1;i<pageNumber;i++) {
            String name = fileName(i);
            String namePlus = fileName(i+1);
            String nameMinus = fileName(i-1);
            try {
                File newFile1 = new File(name + ".html");
                newFile1.delete();
                File newFile = new File(name + ".html");
                FileWriter myWriter = new FileWriter(newFile);
                myWriter.write("<!DOCTYPE html> \n");
                myWriter.write("<html lang=\"en\"> \n");
                myWriter.write("<title>The Northwest Academy</title> \n");
                myWriter.write("</head?> \n");
                myWriter.write("<body> \n");
                myWriter.write("<p style=\"text-align:center;\"> \n");
                myWriter.write("<a  href = \"/home/northwestacademy/pages/" + namePlus + ".html \"> \n");
                myWriter.write("<img src=\"/home/northwestacademy/img/" + name + ".png\" width=\"800\" height=\"538\"> \n");
                myWriter.write("</a> \n");
                myWriter.write("</p> \n");
                myWriter.write("<p style=\"text-align:center;\">\n");
                myWriter.write(c[i] + "\n");
                myWriter.write("</p>\n");
                myWriter.write("<p style=\"text-align:center;\"> \n");
                myWriter.write("<a href=\"/home/northwestacademy/pages/0000.html\"> First </a> | \n");
                myWriter.write("<a href=\"/home/northwestacademy/pages/" + nameMinus + ".html\"> Previous </a> \n");
                myWriter.write("|<a href=\"/home/northwestacademy/archive.html\"> Archive </a> | \n");
                myWriter.write("<a href=\"/home/northwestacademy/pages/" + namePlus + ".html\"> Next | </a> \n");
                myWriter.write("<a href=\"/home/northwestacademy/pages/last.html\"> Latest </a> \n");
                myWriter.write("</p> \n");
                myWriter.write("<p style=\"text-align:center;\">\n");
                myWriter.write("<a href=\"/home/index.html\"> \n");
                myWriter.write("Back to Index \n");
                myWriter.write("</a>\n");
                myWriter.write("</p>\n");
                myWriter.write("<p> </p> \n");
                myWriter.write("<p style=\"text-align:center;\">\n");
                myWriter.write("This is a fan-comic of Dan and Mab's Furry Adventures by Amber. Go read it <a href=\"missmab.com\">here</a>. \n");
                myWriter.write("</p>\n");
                myWriter.write("</body> \n");
                myWriter.write("</html>");
                myWriter.close();
            } catch (IOException e) {
                 e.printStackTrace();
            }
        }
    }
    public static String fileName(int num) {
        String name = "0000.html";
        if (!(num<0)) {
            String tempfileNum = Integer.toString(num);
            switch (tempfileNum.length()) {
                case 1:
                    name = "000" + tempfileNum;
                    break;
                case 2:
                    name = "00" + tempfileNum ;
                    break;
                case 3:
                    name = "0" + tempfileNum;
                    break;
                case 4:
                    name = tempfileNum;
                    break;
            }
        }
        return name;
    }
}

