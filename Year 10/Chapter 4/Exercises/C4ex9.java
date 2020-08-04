import java.util.Scanner;

public class C4ex9 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the time in minutes: ");
    		int time  = input.nextInt();
    	input.close();
    	
    	int hour      = (time / 60);
    	int minutes   = (time % 60);
    	System.out.println("The time is: " + hour + ":" + minutes);
    }
}