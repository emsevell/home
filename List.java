import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class List {
    public static void main(String[] args) {
        final int pageNumber = 5;
        try {
            File newFile1 = new File("archive.html");
            newFile1.delete();
            File newFile = new File("archive.html");
            FileWriter myWriter = new FileWriter(newFile);
            myWriter.write("<!DOCTYPE html> \n");
            myWriter.write("<html lang=\"en\"> \n");
            myWriter.write("<title>The Northwest Academy</title> \n");
            myWriter.write("</head?> \n");
            myWriter.write("<body> \n");
            for (int i = 0; i < pageNumber; i++) {
                String name = fileName(i);
                String namePlus = fileName(i+1);
                String nameMinus = fileName(i-1);
                myWriter.write("<p style=\"text-align:left;\"> \n");
                myWriter.write("<a  href = \"/home/northwestacademy/pages/" + name + ".html \"> \n");
                myWriter.write(name + "\n");
                myWriter.write("</a> \n");
                myWriter.write("</p> \n");
            }
            myWriter.write("<p style=\"text-align:center;\">\n");
            myWriter.write("<a href=\"/home/index.html\"> \n");
            myWriter.write("Back to Index \n");
            myWriter.write("</a>\n");
            myWriter.write("</p>\n");
            myWriter.write("</body> \n");
            myWriter.write("</html>");
            myWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
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

